package com.example.DatabasePostgresqlConnect.controller;

import com.example.DatabasePostgresqlConnect.DTO.studentDTO;
import com.example.DatabasePostgresqlConnect.Entity.studentEntity;
import com.example.DatabasePostgresqlConnect.repository.studentRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class studentController {
    
    private final studentRepository studentRepository;

    public studentController(studentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @GetMapping("/student")
    public List<studentEntity> getStudent(){
        return studentRepository.findAll();
    }
}
