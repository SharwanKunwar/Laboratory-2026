package com.unpredictableCoder.roomFinderBackend.service;

import com.unpredictableCoder.roomFinderBackend.dto.*;
import com.unpredictableCoder.roomFinderBackend.entity.AuthProvider;
import com.unpredictableCoder.roomFinderBackend.entity.Role;
import com.unpredictableCoder.roomFinderBackend.entity.User;
import com.unpredictableCoder.roomFinderBackend.repository.UserRepository;
import com.unpredictableCoder.roomFinderBackend.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;
    private final RestTemplate restTemplate;
    private final OtpService otpService;

    @Value("${app.google.client-id:}")
    private String googleClientId;

    public AuthResponse register(RegisterRequest req) {
        if (userRepository.existsByEmail(req.getEmail())) {
            throw new RuntimeException("Email already registered");
        }
        User user = User.builder()
                .email(req.getEmail())
                .password(passwordEncoder.encode(req.getPassword()))
                .fullName(req.getFullName())
                .phone(req.getPhone())
                .role(req.getRole())
                .authProvider(AuthProvider.LOCAL)
                .build();
        user = userRepository.save(user);
        String token = jwtUtil.generateToken(user.getEmail(), user.getId(), user.getRole().name());
        return AuthResponse.builder()
                .token(token)
                .id(user.getId())
                .email(user.getEmail())
                .fullName(user.getFullName())
                .role(user.getRole())
                .build();
    }

    public AuthResponse login(LoginRequest req) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(req.getEmail(), req.getPassword())
        );
        User user = userRepository.findByEmail(req.getEmail()).orElseThrow();
        return buildAuthResponse(user);
    }

    @SuppressWarnings("unchecked")
    public AuthResponse loginWithGoogle(GoogleLoginRequest req) {
        String url = "https://oauth2.googleapis.com/tokeninfo?id_token=" + req.getIdToken();
        Map<String, Object> payload;
        try {
            payload = restTemplate.getForObject(url, Map.class);
        } catch (Exception e) {
            log.debug("Google token verification failed", e);
            throw new RuntimeException("Invalid Google token");
        }
        if (payload == null || !payload.containsKey("email")) {
            throw new RuntimeException("Invalid Google token");
        }
        if (googleClientId != null && !googleClientId.isBlank() && !googleClientId.equals(payload.get("aud"))) {
            throw new RuntimeException("Invalid Google token");
        }
        String email = (String) payload.get("email");
        String sub = (String) payload.get("sub");
        String name = payload.containsKey("name") ? (String) payload.get("name") : email;

        User user = userRepository.findByAuthProviderAndProviderId(AuthProvider.GOOGLE, sub)
                .or(() -> userRepository.findByEmail(email))
                .orElseGet(() -> {
                    User newUser = User.builder()
                            .email(email)
                            .password(passwordEncoder.encode(UUID.randomUUID().toString()))
                            .fullName(name)
                            .role(Role.SEEKER)
                            .authProvider(AuthProvider.GOOGLE)
                            .providerId(sub)
                            .build();
                    return userRepository.save(newUser);
                });
        if (!AuthProvider.GOOGLE.equals(user.getAuthProvider())) {
            user.setAuthProvider(AuthProvider.GOOGLE);
            user.setProviderId(sub);
            userRepository.save(user);
        }
        return buildAuthResponse(user);
    }

    @SuppressWarnings("unchecked")
    public AuthResponse loginWithFacebook(FacebookLoginRequest req) {
        String url = "https://graph.facebook.com/me?fields=id,email,name&access_token=" + req.getAccessToken();
        Map<String, Object> payload;
        try {
            payload = restTemplate.getForObject(url, Map.class);
        } catch (Exception e) {
            log.debug("Facebook token verification failed", e);
            throw new RuntimeException("Invalid Facebook token");
        }
        if (payload == null || !payload.containsKey("id")) {
            throw new RuntimeException("Invalid Facebook token");
        }
        String fbId = (String) payload.get("id");
        String email = payload.containsKey("email") && payload.get("email") != null
                ? (String) payload.get("email") : "fb_" + fbId + "@roomfinder.phone";
        String name = payload.containsKey("name") ? (String) payload.get("name") : "User";

        User user = userRepository.findByAuthProviderAndProviderId(AuthProvider.FACEBOOK, fbId)
                .or(() -> userRepository.findByEmail(email))
                .orElseGet(() -> {
                    User newUser = User.builder()
                            .email(email)
                            .password(passwordEncoder.encode(UUID.randomUUID().toString()))
                            .fullName(name)
                            .role(Role.SEEKER)
                            .authProvider(AuthProvider.FACEBOOK)
                            .providerId(fbId)
                            .build();
                    return userRepository.save(newUser);
                });
        if (!AuthProvider.FACEBOOK.equals(user.getAuthProvider())) {
            user.setAuthProvider(AuthProvider.FACEBOOK);
            user.setProviderId(fbId);
            userRepository.save(user);
        }
        return buildAuthResponse(user);
    }

    public void phoneRequest(PhoneRequestRequest req) {
        String normalized = req.getPhone().replaceAll("\\D", "").replaceFirst("^0+", "");
        if (normalized.length() < 10 || normalized.length() > 15) {
            throw new RuntimeException("Phone number must be 10–15 digits");
        }
        String code = otpService.generateAndStore(normalized);
        log.info("OTP for {}: {} (use this in dev; configure SMS in production)", req.getPhone(), code);
    }

    public AuthResponse phoneVerify(PhoneVerifyRequest req) {
        String normalized = req.getPhone().replaceAll("\\D", "").replaceFirst("^0+", "");
        if (normalized.length() < 10 || normalized.length() > 15) {
            throw new RuntimeException("Phone number must be 10–15 digits");
        }
        String code = req.getCode().replaceAll("\\D", "");
        if (code.length() < 4 || code.length() > 8) {
            throw new RuntimeException("Code must be 4–8 digits");
        }
        if (otpService.verifyAndRemove(normalized, code).isEmpty()) {
            throw new RuntimeException("Invalid or expired code");
        }
        User user = userRepository.findByPhone(normalized)
                .or(() -> userRepository.findByAuthProviderAndProviderId(AuthProvider.PHONE, normalized))
                .orElseGet(() -> {
                    User newUser = User.builder()
                            .email("phone_" + normalized + "@roomfinder.phone")
                            .password(passwordEncoder.encode(UUID.randomUUID().toString()))
                            .fullName("User " + req.getPhone())
                            .phone(normalized)
                            .role(Role.SEEKER)
                            .authProvider(AuthProvider.PHONE)
                            .providerId(normalized)
                            .build();
                    return userRepository.save(newUser);
                });
        if (user.getPhone() == null) {
            user.setPhone(normalized);
            userRepository.save(user);
        }
        return buildAuthResponse(user);
    }

    private AuthResponse buildAuthResponse(User user) {
        Role role = user.getRole() != null ? user.getRole() : Role.SEEKER;
        String token = jwtUtil.generateToken(user.getEmail(), user.getId(), role.name());
        return AuthResponse.builder()
                .token(token)
                .id(user.getId())
                .email(user.getEmail())
                .fullName(user.getFullName())
                .role(role)
                .build();
    }
}
