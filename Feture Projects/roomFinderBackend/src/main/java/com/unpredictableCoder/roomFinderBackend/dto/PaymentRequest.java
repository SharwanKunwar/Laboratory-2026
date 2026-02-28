package com.unpredictableCoder.roomFinderBackend.dto;

import com.unpredictableCoder.roomFinderBackend.entity.PaymentMethod;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class PaymentRequest {
    @NotNull
    private Long billingId;
    @NotNull
    @DecimalMin("0.01")
    private BigDecimal amount;
    @NotNull
    private PaymentMethod method;
    private String transactionId;
    private String notes;
}
