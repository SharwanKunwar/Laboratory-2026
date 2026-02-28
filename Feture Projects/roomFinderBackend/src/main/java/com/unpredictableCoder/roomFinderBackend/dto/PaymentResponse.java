package com.unpredictableCoder.roomFinderBackend.dto;

import com.unpredictableCoder.roomFinderBackend.entity.PaymentMethod;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.Instant;

@Data
@Builder
public class PaymentResponse {
    private Long id;
    private Long billingId;
    private BigDecimal amount;
    private PaymentMethod method;
    private String transactionId;
    private String notes;
    private Instant paidAt;
}
