package com.unpredictableCoder.roomFinderBackend.service;

import com.unpredictableCoder.roomFinderBackend.dto.NotificationResponse;
import com.unpredictableCoder.roomFinderBackend.entity.Notification;
import com.unpredictableCoder.roomFinderBackend.entity.NotificationType;
import com.unpredictableCoder.roomFinderBackend.entity.User;
import com.unpredictableCoder.roomFinderBackend.repository.NotificationRepository;
import com.unpredictableCoder.roomFinderBackend.security.AuthUser;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NotificationService {

    private final NotificationRepository notificationRepository;

    public void create(User user, String title, String body, NotificationType type, String link) {
        Notification n = Notification.builder()
                .user(user)
                .title(title)
                .body(body)
                .type(type)
                .link(link)
                .read(false)
                .build();
        notificationRepository.save(n);
    }

    private Long currentUserId() {
        var auth = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (auth instanceof AuthUser u) return u.getUserId();
        return null;
    }

    @Transactional(readOnly = true)
    public List<NotificationResponse> getMyNotifications() {
        Long uid = currentUserId();
        if (uid == null) return List.of();
        return notificationRepository.findAllByUserIdOrderByCreatedAtDesc(uid).stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public long getUnreadCount() {
        Long uid = currentUserId();
        if (uid == null) return 0;
        return notificationRepository.countByUserIdAndReadFalse(uid);
    }

    @Transactional
    public void markAsRead(Long id) {
        Notification n = notificationRepository.findById(id).orElseThrow(() -> new RuntimeException("Notification not found"));
        if (!n.getUser().getId().equals(currentUserId())) return;
        n.setRead(true);
        notificationRepository.save(n);
    }

    @Transactional
    public void markAllAsRead() {
        Long uid = currentUserId();
        if (uid == null) return;
        notificationRepository.findAllByUserIdOrderByCreatedAtDesc(uid).stream()
                .filter(n -> !n.getRead())
                .forEach(n -> {
                    n.setRead(true);
                    notificationRepository.save(n);
                });
    }

    private NotificationResponse toResponse(Notification n) {
        return NotificationResponse.builder()
                .id(n.getId())
                .title(n.getTitle())
                .body(n.getBody())
                .type(n.getType())
                .link(n.getLink())
                .read(n.getRead())
                .createdAt(n.getCreatedAt())
                .build();
    }
}
