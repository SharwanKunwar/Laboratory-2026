package com.unpredictableCoder.roomFinderBackend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.Date;

@Component
public class JwtUtil {

    private static final int KEY_BYTES = 32; // HS256 requires at least 256 bits

    @Value("${app.jwt.secret}")
    private String secret;

    @Value("${app.jwt.expiration-ms}")
    private long expirationMs;

    private SecretKey signingKey;

    @PostConstruct
    public void init() {
        byte[] secretBytes = secret != null ? secret.getBytes(StandardCharsets.UTF_8) : new byte[0];
        if (secretBytes.length >= KEY_BYTES) {
            byte[] keyBytes = new byte[KEY_BYTES];
            System.arraycopy(secretBytes, 0, keyBytes, 0, KEY_BYTES);
            this.signingKey = new SecretKeySpec(keyBytes, "HmacSHA256");
        } else {
            try {
                MessageDigest digest = MessageDigest.getInstance("SHA-256");
                byte[] hash = digest.digest(secretBytes.length > 0 ? secretBytes : "defaultSecret".getBytes(StandardCharsets.UTF_8));
                this.signingKey = new SecretKeySpec(hash, "HmacSHA256");
            } catch (Exception e) {
                throw new IllegalStateException("JWT key initialisation failed", e);
            }
        }
    }

    private SecretKey getSigningKey() {
        return signingKey;
    }

    public String generateToken(String email, Long userId, String role) {
        return Jwts.builder()
                .subject(email)
                .claim("userId", userId)
                .claim("role", role)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + expirationMs))
                .signWith(getSigningKey())
                .compact();
    }

    public String getEmailFromToken(String token) {
        return getClaims(token).getSubject();
    }

    public Long getUserIdFromToken(String token) {
        return getClaims(token).get("userId", Long.class);
    }

    public String getRoleFromToken(String token) {
        return getClaims(token).get("role", String.class);
    }

    public boolean validateToken(String token, String email) {
        try {
            String tokenEmail = getEmailFromToken(token);
            return tokenEmail.equals(email) && !isTokenExpired(token);
        } catch (Exception e) {
            return false;
        }
    }

    private boolean isTokenExpired(String token) {
        return getClaims(token).getExpiration().before(new Date());
    }

    private Claims getClaims(String token) {
        return Jwts.parser()
                .verifyWith(getSigningKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}
