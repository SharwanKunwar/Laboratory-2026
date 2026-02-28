package com.unpredictableCoder.roomFinderBackend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class FacebookLoginRequest {
    @NotBlank
    private String accessToken;
}
