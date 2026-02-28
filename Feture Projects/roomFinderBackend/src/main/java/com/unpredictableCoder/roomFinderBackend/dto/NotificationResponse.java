package com.unpredictableCoder.roomFinderBackend.dto;

import com.unpredictableCoder.roomFinderBackend.entity.NotificationType;
import lombok.Builder;
import lombok.Data;

import java.time.Instant;

@Data
@Builder
public class NotificationResponse {
    private Long id;
    private String title;
    private String body;
    private NotificationType type;
    private String link;
    private Boolean read;
    private Instant createdAt;
}
