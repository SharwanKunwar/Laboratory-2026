package com.unpredictableCoder.roomFinderBackend.dto;

import com.unpredictableCoder.roomFinderBackend.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
    private String token;
    private Long id;
    private String email;
    private String fullName;
    private Role role;
}
