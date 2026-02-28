package com.unpredictableCoder.roomFinderBackend.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;
import java.time.Instant;

@Data
public class BillingRequest {
    @NotNull
    private Long roomId;
    @NotNull
    private Integer billingYear;
    @NotNull
    private Integer billingMonth;
    @NotNull
    @DecimalMin("0")
    private BigDecimal amount;
    private Instant dueDate;
}
