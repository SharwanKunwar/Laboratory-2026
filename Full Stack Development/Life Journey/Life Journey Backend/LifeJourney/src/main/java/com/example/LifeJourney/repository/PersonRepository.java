package com.example.LifeJourney.repository;

import com.example.LifeJourney.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long> {
}
