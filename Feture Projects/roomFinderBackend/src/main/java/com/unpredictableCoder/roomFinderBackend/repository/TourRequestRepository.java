package com.unpredictableCoder.roomFinderBackend.repository;

import com.unpredictableCoder.roomFinderBackend.entity.RequestStatus;
import com.unpredictableCoder.roomFinderBackend.entity.TourRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TourRequestRepository extends JpaRepository<TourRequest, Long> {
    List<TourRequest> findAllBySeekersId(Long seekerId);
    List<TourRequest> findAllByRoom_Owner_Id(Long ownerId);
    List<TourRequest> findAllByRoomId(Long roomId);
    List<TourRequest> findAllBySeekersIdAndStatus(Long seekerId, RequestStatus status);
}
