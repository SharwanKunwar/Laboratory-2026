package com.unpredictableCoder.roomFinderBackend.controller;

import com.unpredictableCoder.roomFinderBackend.dto.TourRequestDto;
import com.unpredictableCoder.roomFinderBackend.dto.TourRequestResponse;
import com.unpredictableCoder.roomFinderBackend.entity.RequestStatus;
import com.unpredictableCoder.roomFinderBackend.service.TourRequestService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/requests")
@RequiredArgsConstructor
public class TourRequestController {

    private final TourRequestService tourRequestService;

    @PostMapping
    @PreAuthorize("hasRole('SEEKER')")
    public ResponseEntity<TourRequestResponse> create(@Valid @RequestBody TourRequestDto dto) {
        return ResponseEntity.ok(tourRequestService.create(dto));
    }

    @GetMapping("/my")
    @PreAuthorize("hasRole('SEEKER')")
    public ResponseEntity<List<TourRequestResponse>> getMyRequests() {
        return ResponseEntity.ok(tourRequestService.getMyRequests());
    }

    @GetMapping("/incoming")
    @PreAuthorize("hasRole('OWNER')")
    public ResponseEntity<List<TourRequestResponse>> getIncoming() {
        return ResponseEntity.ok(tourRequestService.getRequestsForMyRooms());
    }

    @PatchMapping("/{id}/respond")
    @PreAuthorize("hasRole('OWNER')")
    public ResponseEntity<TourRequestResponse> respond(
            @PathVariable Long id,
            @RequestBody Map<String, String> body
    ) {
        RequestStatus status = RequestStatus.valueOf(body.getOrDefault("status", "PENDING"));
        return ResponseEntity.ok(tourRequestService.respond(id, status));
    }
}
