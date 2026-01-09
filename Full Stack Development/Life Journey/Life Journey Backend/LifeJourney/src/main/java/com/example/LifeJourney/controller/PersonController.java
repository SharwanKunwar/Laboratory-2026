package com.example.LifeJourney.controller;

import com.example.LifeJourney.model.Person;
import com.example.LifeJourney.repository.PersonRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/persons")
public class PersonController {

    private final PersonRepository repo;

    public PersonController(PersonRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public Person save(@RequestBody Person person) {
        return repo.save(person);
    }

    @GetMapping
    public List<Person> getAll() {
        return repo.findAll();
    }
}
