package com.unpredictableCoder.roomFinderBackend.service;

import com.unpredictableCoder.roomFinderBackend.dto.TourRequestDto;
import com.unpredictableCoder.roomFinderBackend.dto.TourRequestResponse;
import com.unpredictableCoder.roomFinderBackend.entity.*;
import com.unpredictableCoder.roomFinderBackend.repository.RoomRepository;
import com.unpredictableCoder.roomFinderBackend.repository.TourRequestRepository;
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
public class TourRequestService {

    private final TourRequestRepository tourRequestRepository;
    private final RoomRepository roomRepository;
    private final UserRepository userRepository;
    private final NotificationService notificationService;

    private Long currentUserId() {
        var auth = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (auth instanceof AuthUser u) return u.getUserId();
        throw new AccessDeniedException("Not authenticated");
    }

    @Transactional
    public TourRequestResponse create(TourRequestDto dto) {
        User seeker = userRepository.findById(currentUserId()).orElseThrow();
        Room room = roomRepository.findById(dto.getRoomId()).orElseThrow(() -> new RuntimeException("Room not found"));
        TourRequest tr = TourRequest.builder()
                .room(room)
                .seekers(seeker)
                .status(RequestStatus.PENDING)
                .preferredTourTime(dto.getPreferredTourTime())
                .message(dto.getMessage())
                .build();
        tr = tourRequestRepository.save(tr);
        notificationService.create(room.getOwner(), "New tour request", seeker.getFullName() + " requested a tour for " + room.getTitle(), NotificationType.TOUR_REQUEST, "/api/requests/" + tr.getId());
        return toResponse(tr);
    }

    @Transactional(readOnly = true)
    public List<TourRequestResponse> getMyRequests() {
        return tourRequestRepository.findAllBySeekersId(currentUserId()).stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<TourRequestResponse> getRequestsForMyRooms() {
        return tourRequestRepository.findAllByRoom_Owner_Id(currentUserId()).stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    @Transactional
    public TourRequestResponse respond(Long id, RequestStatus status) {
        TourRequest tr = tourRequestRepository.findById(id).orElseThrow(() -> new RuntimeException("Request not found"));
        if (!tr.getRoom().getOwner().getId().equals(currentUserId())) {
            throw new AccessDeniedException("Not your room");
        }
        tr.setStatus(status);
        tr.setRespondedAt(java.time.Instant.now());
        tr = tourRequestRepository.save(tr);
        notificationService.create(tr.getSeekers(), "Tour request " + status.name().toLowerCase(), "Your tour request for " + tr.getRoom().getTitle() + " was " + status.name().toLowerCase(), NotificationType.TOUR_RESPONSE, "/requests");
        return toResponse(tr);
    }

    private TourRequestResponse toResponse(TourRequest tr) {
        return TourRequestResponse.builder()
                .id(tr.getId())
                .roomId(tr.getRoom().getId())
                .roomTitle(tr.getRoom().getTitle())
                .seekerId(tr.getSeekers().getId())
                .seekerName(tr.getSeekers().getFullName())
                .seekerEmail(tr.getSeekers().getEmail())
                .status(tr.getStatus())
                .preferredTourTime(tr.getPreferredTourTime())
                .message(tr.getMessage())
                .createdAt(tr.getCreatedAt())
                .respondedAt(tr.getRespondedAt())
                .build();
    }
}
