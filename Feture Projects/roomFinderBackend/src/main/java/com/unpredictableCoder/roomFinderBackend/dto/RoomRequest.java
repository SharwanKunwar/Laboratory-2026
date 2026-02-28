package com.unpredictableCoder.roomFinderBackend.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class RoomRequest {
    @NotBlank
    private String title;
    private String description;
    @NotBlank
    private String address;
    private String city;
    private String area;
    @NotNull
    @DecimalMin("0")
    private BigDecimal rentPerMonth;
    private Integer bedrooms;
    private Integer bathrooms;
    private Boolean furnished;
    private String imageUrls;
}
