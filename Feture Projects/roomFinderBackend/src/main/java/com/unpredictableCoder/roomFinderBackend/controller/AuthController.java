package com.unpredictableCoder.roomFinderBackend.controller;

import com.unpredictableCoder.roomFinderBackend.dto.*;
import com.unpredictableCoder.roomFinderBackend.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@Valid @RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.login(request));
    }

    @PostMapping("/google")
    public ResponseEntity<AuthResponse> loginWithGoogle(@Valid @RequestBody GoogleLoginRequest request) {
        return ResponseEntity.ok(authService.loginWithGoogle(request));
    }

    @PostMapping("/facebook")
    public ResponseEntity<AuthResponse> loginWithFacebook(@Valid @RequestBody FacebookLoginRequest request) {
        return ResponseEntity.ok(authService.loginWithFacebook(request));
    }

    @PostMapping("/phone/request")
    public ResponseEntity<Map<String, String>> phoneRequest(@Valid @RequestBody PhoneRequestRequest request) {
        authService.phoneRequest(request);
        return ResponseEntity.ok(Map.of("message", "OTP sent"));
    }

    @PostMapping("/phone/verify")
    public ResponseEntity<AuthResponse> phoneVerify(@Valid @RequestBody PhoneVerifyRequest request) {
        return ResponseEntity.ok(authService.phoneVerify(request));
    }
}
