package com.unpredictableCoder.roomFinderBackend.dto;

import com.unpredictableCoder.roomFinderBackend.entity.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class RegisterRequest {
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String password;
    @NotBlank
    private String fullName;
    private String phone;
    @NotNull
    private Role role;
}
