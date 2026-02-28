package com.unpredictableCoder.roomFinderBackend.service;

import com.unpredictableCoder.roomFinderBackend.dto.PaymentRequest;
import com.unpredictableCoder.roomFinderBackend.dto.PaymentResponse;
import com.unpredictableCoder.roomFinderBackend.entity.Billing;
import com.unpredictableCoder.roomFinderBackend.entity.Payment;
import com.unpredictableCoder.roomFinderBackend.repository.BillingRepository;
import com.unpredictableCoder.roomFinderBackend.repository.PaymentRepository;
import com.unpredictableCoder.roomFinderBackend.security.AuthUser;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final PaymentRepository paymentRepository;
    private final BillingRepository billingRepository;
    private final BillingService billingService;

    private Long currentUserId() {
        var auth = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (auth instanceof AuthUser u) return u.getUserId();
        throw new AccessDeniedException("Not authenticated");
    }

    @Transactional
    public PaymentResponse create(PaymentRequest req) {
        Billing billing = billingRepository.findById(req.getBillingId()).orElseThrow(() -> new RuntimeException("Billing not found"));
        if (!billing.getRoom().getOwner().getId().equals(currentUserId())) {
            throw new AccessDeniedException("Not your billing");
        }
        Payment payment = Payment.builder()
                .billing(billing)
                .amount(req.getAmount())
                .method(req.getMethod())
                .transactionId(req.getTransactionId())
                .notes(req.getNotes())
                .build();
        payment = paymentRepository.save(payment);
        BigDecimal paidTotal = paymentRepository.findAllByBillingId(billing.getId()).stream()
                .map(Payment::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        billingService.updateStatus(billing, paidTotal);
        return toResponse(payment);
    }

    @Transactional(readOnly = true)
    public List<PaymentResponse> getByBillingId(Long billingId) {
        Billing billing = billingRepository.findById(billingId).orElseThrow(() -> new RuntimeException("Billing not found"));
        if (!billing.getRoom().getOwner().getId().equals(currentUserId())) {
            throw new AccessDeniedException("Not your billing");
        }
        return paymentRepository.findAllByBillingId(billingId).stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    private PaymentResponse toResponse(Payment p) {
        return PaymentResponse.builder()
                .id(p.getId())
                .billingId(p.getBilling().getId())
                .amount(p.getAmount())
                .method(p.getMethod())
                .transactionId(p.getTransactionId())
                .notes(p.getNotes())
                .paidAt(p.getPaidAt())
                .build();
    }
}
