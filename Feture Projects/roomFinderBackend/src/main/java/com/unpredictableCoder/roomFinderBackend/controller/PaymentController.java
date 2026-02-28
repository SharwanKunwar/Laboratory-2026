package com.unpredictableCoder.roomFinderBackend.controller;

import com.unpredictableCoder.roomFinderBackend.dto.PaymentRequest;
import com.unpredictableCoder.roomFinderBackend.dto.PaymentResponse;
import com.unpredictableCoder.roomFinderBackend.service.PaymentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
@RequiredArgsConstructor
@PreAuthorize("hasRole('OWNER')")
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping
    public ResponseEntity<PaymentResponse> create(@Valid @RequestBody PaymentRequest request) {
        return ResponseEntity.ok(paymentService.create(request));
    }

    @GetMapping("/billing/{billingId}")
    public ResponseEntity<List<PaymentResponse>> getByBilling(@PathVariable Long billingId) {
        return ResponseEntity.ok(paymentService.getByBillingId(billingId));
    }
}
