package com.example.JourneyBackend.Repository;

import com.example.JourneyBackend.Entity.studentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface studentRepository extends JpaRepository<studentEntity, Long> {
}
