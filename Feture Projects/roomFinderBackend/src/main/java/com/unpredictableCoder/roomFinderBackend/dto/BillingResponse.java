package com.unpredictableCoder.roomFinderBackend.dto;

import com.unpredictableCoder.roomFinderBackend.entity.BillingStatus;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.Instant;

@Data
@Builder
public class BillingResponse {
    private Long id;
    private Long roomId;
    private String roomTitle;
    private Integer billingYear;
    private Integer billingMonth;
    private BigDecimal amount;
    private BillingStatus status;
    private Instant dueDate;
    private Instant paidAt;
    private Instant createdAt;
}
