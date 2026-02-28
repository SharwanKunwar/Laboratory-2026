package com.unpredictableCoder.roomFinderBackend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class PhoneRequestRequest {
    @NotBlank(message = "Phone number is required")
    private String phone;
}
