package com.unpredictableCoder.roomFinderBackend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class PhoneVerifyRequest {
    @NotBlank(message = "Phone number is required")
    private String phone;

    @NotBlank(message = "Verification code is required")
    private String code;
}
