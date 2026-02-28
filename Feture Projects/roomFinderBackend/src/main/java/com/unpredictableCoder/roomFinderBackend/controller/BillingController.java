package com.unpredictableCoder.roomFinderBackend.controller;

import com.unpredictableCoder.roomFinderBackend.dto.BillingRequest;
import com.unpredictableCoder.roomFinderBackend.dto.BillingResponse;
import com.unpredictableCoder.roomFinderBackend.service.BillingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/billings")
@RequiredArgsConstructor
@PreAuthorize("hasRole('OWNER')")
public class BillingController {

    private final BillingService billingService;

    @GetMapping
    public ResponseEntity<List<BillingResponse>> getMyBillings() {
        return ResponseEntity.ok(billingService.getMyBillings());
    }

    @GetMapping("/room/{roomId}")
    public ResponseEntity<List<BillingResponse>> getByRoom(@PathVariable Long roomId) {
        return ResponseEntity.ok(billingService.getByRoomId(roomId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<BillingResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(billingService.getById(id));
    }

    @PostMapping
    public ResponseEntity<BillingResponse> create(@Valid @RequestBody BillingRequest request) {
        return ResponseEntity.ok(billingService.create(request));
    }
}
