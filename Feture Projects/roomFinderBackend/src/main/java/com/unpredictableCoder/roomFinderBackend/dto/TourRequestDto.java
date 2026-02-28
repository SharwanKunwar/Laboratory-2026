package com.unpredictableCoder.roomFinderBackend.dto;

import com.unpredictableCoder.roomFinderBackend.entity.RequestStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TourRequestDto {
    @NotNull
    private Long roomId;
    private LocalDateTime preferredTourTime;
    private String message;
}
