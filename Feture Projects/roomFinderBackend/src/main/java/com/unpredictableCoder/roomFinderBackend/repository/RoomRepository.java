package com.unpredictableCoder.roomFinderBackend.repository;

import com.unpredictableCoder.roomFinderBackend.entity.Room;
import com.unpredictableCoder.roomFinderBackend.entity.RoomStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoomRepository extends JpaRepository<Room, Long> {
    List<Room> findAllByOwnerId(Long ownerId);
    List<Room> findAllByStatus(RoomStatus status);
    List<Room> findAllByCityAndStatus(String city, RoomStatus status);
}
