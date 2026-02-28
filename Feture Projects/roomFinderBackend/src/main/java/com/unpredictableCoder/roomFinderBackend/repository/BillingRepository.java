package com.unpredictableCoder.roomFinderBackend.repository;

import com.unpredictableCoder.roomFinderBackend.entity.Billing;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BillingRepository extends JpaRepository<Billing, Long> {
    List<Billing> findAllByRoomId(Long roomId);
    List<Billing> findAllByRoom_Owner_Id(Long ownerId);
}
