package com.unpredictableCoder.roomFinderBackend.dto;

import com.unpredictableCoder.roomFinderBackend.entity.RequestStatus;
import lombok.Builder;
import lombok.Data;

import java.time.Instant;
import java.time.LocalDateTime;

@Data
@Builder
public class TourRequestResponse {
    private Long id;
    private Long roomId;
    private String roomTitle;
    private Long seekerId;
    private String seekerName;
    private String seekerEmail;
    private RequestStatus status;
    private LocalDateTime preferredTourTime;
    private String message;
    private Instant createdAt;
    private Instant respondedAt;
}
