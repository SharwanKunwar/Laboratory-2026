package com.example.DatabasePostgresqlConnect.repository;

import com.example.DatabasePostgresqlConnect.Entity.studentEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface studentRepository extends JpaRepository<studentEntity,Long> {
}
