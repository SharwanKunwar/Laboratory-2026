package com.unpredictableCoder.roomFinderBackend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.Instant;

@Entity
@Table(name = "payments")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "billing_id", nullable = false)
    private Billing billing;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal amount;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private PaymentMethod method;

    private String transactionId;
    private String notes;

    @Column(nullable = false, updatable = false)
    private Instant paidAt;

    @PrePersist
    protected void onCreate() {
        if (paidAt == null) paidAt = Instant.now();
    }
}
