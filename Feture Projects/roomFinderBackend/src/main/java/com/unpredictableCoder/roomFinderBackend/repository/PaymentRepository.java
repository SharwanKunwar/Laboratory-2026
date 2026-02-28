package com.unpredictableCoder.roomFinderBackend.repository;

import com.unpredictableCoder.roomFinderBackend.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    List<Payment> findAllByBillingId(Long billingId);
}
