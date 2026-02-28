package com.unpredictableCoder.roomFinderBackend.security;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AuthUser {
    private final String email;
    private final Long userId;
}
