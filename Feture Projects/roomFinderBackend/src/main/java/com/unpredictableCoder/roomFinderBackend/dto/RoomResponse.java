package com.unpredictableCoder.roomFinderBackend.dto;

import com.unpredictableCoder.roomFinderBackend.entity.RoomStatus;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.Instant;

@Data
@Builder
public class RoomResponse {
    private Long id;
    private String title;
    private String description;
    private String address;
    private String city;
    private String area;
    private BigDecimal rentPerMonth;
    private Integer bedrooms;
    private Integer bathrooms;
    private Boolean furnished;
    private String imageUrls;
    private RoomStatus status;
    private Long ownerId;
    private String ownerName;
    private Instant createdAt;
}
