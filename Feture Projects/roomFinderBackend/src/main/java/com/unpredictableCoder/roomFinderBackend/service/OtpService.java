package com.unpredictableCoder.roomFinderBackend.service;

import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class OtpService {

    private static final int OTP_LENGTH = 6;
    private static final long OTP_EXPIRY_MS = 5 * 60 * 1000; // 5 minutes

    private final Map<String, OtpEntry> store = new ConcurrentHashMap<>();
    private final Random random = new Random();

    public String generateAndStore(String phone) {
        String code = String.format("%0" + OTP_LENGTH + "d", random.nextInt((int) Math.pow(10, OTP_LENGTH)));
        store.put(normalize(phone), new OtpEntry(code, System.currentTimeMillis()));
        return code;
    }

    public Optional<String> verifyAndRemove(String phone, String code) {
        String key = normalize(phone);
        OtpEntry entry = store.get(key);
        if (entry == null || !entry.code.equals(code)) {
            return Optional.empty();
        }
        if (System.currentTimeMillis() - entry.createdAt > OTP_EXPIRY_MS) {
            store.remove(key);
            return Optional.empty();
        }
        store.remove(key);
        return Optional.of(key);
    }

    private static String normalize(String phone) {
        return phone.replaceAll("\\D", "").replaceFirst("^0+", "");
    }

    private record OtpEntry(String code, long createdAt) {}
}
