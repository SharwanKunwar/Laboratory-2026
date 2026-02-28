package com.unpredictableCoder.roomFinderBackend.service;

import com.unpredictableCoder.roomFinderBackend.dto.RoomRequest;
import com.unpredictableCoder.roomFinderBackend.dto.RoomResponse;
import com.unpredictableCoder.roomFinderBackend.entity.Room;
import com.unpredictableCoder.roomFinderBackend.entity.RoomStatus;
import com.unpredictableCoder.roomFinderBackend.entity.User;
import com.unpredictableCoder.roomFinderBackend.repository.RoomRepository;
import com.unpredictableCoder.roomFinderBackend.repository.UserRepository;
import com.unpredictableCoder.roomFinderBackend.security.AuthUser;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RoomService {

    private final RoomRepository roomRepository;
    private final UserRepository userRepository;

    private Long currentUserId() {
        var auth = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (auth instanceof AuthUser u) return u.getUserId();
        throw new AccessDeniedException("Not authenticated");
    }

    @Transactional(readOnly = true)
    public List<RoomResponse> getMyRooms() {
        return roomRepository.findAllByOwnerId(currentUserId()).stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<RoomResponse> getPublicRooms(String city) {
        List<Room> rooms = city != null && !city.isBlank()
                ? roomRepository.findAllByCityAndStatus(city, RoomStatus.AVAILABLE)
                : roomRepository.findAllByStatus(RoomStatus.AVAILABLE);
        return rooms.stream().map(this::toResponse).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public RoomResponse getById(Long id) {
        Room room = roomRepository.findById(id).orElseThrow(() -> new RuntimeException("Room not found"));
        return toResponse(room);
    }

    @Transactional
    public RoomResponse create(RoomRequest req) {
        User owner = userRepository.findById(currentUserId()).orElseThrow();
        Room room = Room.builder()
                .title(req.getTitle())
                .description(req.getDescription())
                .address(req.getAddress())
                .city(req.getCity())
                .area(req.getArea())
                .rentPerMonth(req.getRentPerMonth())
                .bedrooms(req.getBedrooms())
                .bathrooms(req.getBathrooms())
                .furnished(req.getFurnished() != null && req.getFurnished())
                .imageUrls(req.getImageUrls())
                .status(RoomStatus.AVAILABLE)
                .owner(owner)
                .build();
        room = roomRepository.save(room);
        return toResponse(room);
    }

    @Transactional
    public RoomResponse update(Long id, RoomRequest req) {
        Room room = roomRepository.findById(id).orElseThrow(() -> new RuntimeException("Room not found"));
        if (!room.getOwner().getId().equals(currentUserId())) {
            throw new AccessDeniedException("Not your room");
        }
        room.setTitle(req.getTitle());
        room.setDescription(req.getDescription());
        room.setAddress(req.getAddress());
        room.setCity(req.getCity());
        room.setArea(req.getArea());
        room.setRentPerMonth(req.getRentPerMonth());
        room.setBedrooms(req.getBedrooms());
        room.setBathrooms(req.getBathrooms());
        room.setFurnished(req.getFurnished() != null && req.getFurnished());
        room.setImageUrls(req.getImageUrls());
        room = roomRepository.save(room);
        return toResponse(room);
    }

    @Transactional
    public void delete(Long id) {
        Room room = roomRepository.findById(id).orElseThrow(() -> new RuntimeException("Room not found"));
        if (!room.getOwner().getId().equals(currentUserId())) {
            throw new AccessDeniedException("Not your room");
        }
        roomRepository.delete(room);
    }

    private RoomResponse toResponse(Room r) {
        return RoomResponse.builder()
                .id(r.getId())
                .title(r.getTitle())
                .description(r.getDescription())
                .address(r.getAddress())
                .city(r.getCity())
                .area(r.getArea())
                .rentPerMonth(r.getRentPerMonth())
                .bedrooms(r.getBedrooms())
                .bathrooms(r.getBathrooms())
                .furnished(r.getFurnished())
                .imageUrls(r.getImageUrls())
                .status(r.getStatus())
                .ownerId(r.getOwner().getId())
                .ownerName(r.getOwner().getFullName())
                .createdAt(r.getCreatedAt())
                .build();
    }
}
