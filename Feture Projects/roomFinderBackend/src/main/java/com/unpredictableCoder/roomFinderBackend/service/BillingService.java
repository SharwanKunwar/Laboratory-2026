package com.unpredictableCoder.roomFinderBackend.service;

import com.unpredictableCoder.roomFinderBackend.dto.BillingRequest;
import com.unpredictableCoder.roomFinderBackend.dto.BillingResponse;
import com.unpredictableCoder.roomFinderBackend.entity.Billing;
import com.unpredictableCoder.roomFinderBackend.entity.BillingStatus;
import com.unpredictableCoder.roomFinderBackend.entity.Room;
import com.unpredictableCoder.roomFinderBackend.repository.BillingRepository;
import com.unpredictableCoder.roomFinderBackend.repository.RoomRepository;
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
public class BillingService {

    private final BillingRepository billingRepository;
    private final RoomRepository roomRepository;

    private Long currentUserId() {
        var auth = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (auth instanceof AuthUser u) return u.getUserId();
        throw new AccessDeniedException("Not authenticated");
    }

    @Transactional(readOnly = true)
    public List<BillingResponse> getMyBillings() {
        return billingRepository.findAllByRoom_Owner_Id(currentUserId()).stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<BillingResponse> getByRoomId(Long roomId) {
        Room room = roomRepository.findById(roomId).orElseThrow(() -> new RuntimeException("Room not found"));
        if (!room.getOwner().getId().equals(currentUserId())) {
            throw new AccessDeniedException("Not your room");
        }
        return billingRepository.findAllByRoomId(roomId).stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    @Transactional
    public BillingResponse create(BillingRequest req) {
        Room room = roomRepository.findById(req.getRoomId()).orElseThrow(() -> new RuntimeException("Room not found"));
        if (!room.getOwner().getId().equals(currentUserId())) {
            throw new AccessDeniedException("Not your room");
        }
        Billing billing = Billing.builder()
                .room(room)
                .billingYear(req.getBillingYear())
                .billingMonth(req.getBillingMonth())
                .amount(req.getAmount())
                .status(BillingStatus.PENDING)
                .dueDate(req.getDueDate())
                .build();
        billing = billingRepository.save(billing);
        return toResponse(billing);
    }

    @Transactional(readOnly = true)
    public BillingResponse getById(Long id) {
        Billing b = billingRepository.findById(id).orElseThrow(() -> new RuntimeException("Billing not found"));
        if (!b.getRoom().getOwner().getId().equals(currentUserId())) {
            throw new AccessDeniedException("Not your billing");
        }
        return toResponse(b);
    }

    void updateStatus(Billing b, BigDecimal paidTotal) {
        if (paidTotal.compareTo(BigDecimal.ZERO) == 0) {
            b.setStatus(BillingStatus.PENDING);
        } else if (paidTotal.compareTo(b.getAmount()) >= 0) {
            b.setStatus(BillingStatus.PAID);
            b.setPaidAt(java.time.Instant.now());
        } else {
            b.setStatus(BillingStatus.PARTIAL);
        }
        billingRepository.save(b);
    }

    private BillingResponse toResponse(Billing b) {
        return BillingResponse.builder()
                .id(b.getId())
                .roomId(b.getRoom().getId())
                .roomTitle(b.getRoom().getTitle())
                .billingYear(b.getBillingYear())
                .billingMonth(b.getBillingMonth())
                .amount(b.getAmount())
                .status(b.getStatus())
                .dueDate(b.getDueDate())
                .paidAt(b.getPaidAt())
                .createdAt(b.getCreatedAt())
                .build();
    }
}
