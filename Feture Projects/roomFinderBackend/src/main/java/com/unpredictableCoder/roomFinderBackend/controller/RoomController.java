package com.unpredictableCoder.roomFinderBackend.controller;

import com.unpredictableCoder.roomFinderBackend.dto.RoomRequest;
import com.unpredictableCoder.roomFinderBackend.dto.RoomResponse;
import com.unpredictableCoder.roomFinderBackend.service.RoomService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
@RequiredArgsConstructor
public class RoomController {

    private final RoomService roomService;

    @GetMapping("/public")
    public ResponseEntity<List<RoomResponse>> listPublic(@RequestParam(required = false) String city) {
        return ResponseEntity.ok(roomService.getPublicRooms(city));
    }

    @GetMapping("/public/{id}")
    public ResponseEntity<RoomResponse> getPublic(@PathVariable Long id) {
        return ResponseEntity.ok(roomService.getById(id));
    }

    @GetMapping("/my")
    @PreAuthorize("hasRole('OWNER')")
    public ResponseEntity<List<RoomResponse>> getMyRooms() {
        return ResponseEntity.ok(roomService.getMyRooms());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoomResponse> getById(@PathVariable Long id) {
        return ResponseEntity.ok(roomService.getById(id));
    }

    @PostMapping
    @PreAuthorize("hasRole('OWNER')")
    public ResponseEntity<RoomResponse> create(@Valid @RequestBody RoomRequest request) {
        return ResponseEntity.ok(roomService.create(request));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('OWNER')")
    public ResponseEntity<RoomResponse> update(@PathVariable Long id, @Valid @RequestBody RoomRequest request) {
        return ResponseEntity.ok(roomService.update(id, request));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('OWNER')")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        roomService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
