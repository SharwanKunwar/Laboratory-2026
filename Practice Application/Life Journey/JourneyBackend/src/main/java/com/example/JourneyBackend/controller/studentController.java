package com.example.JourneyBackend.controller;

import com.example.JourneyBackend.Entity.studentEntity;
import com.example.JourneyBackend.Service.studentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class studentController {

    private final studentService studentService;

    @PostMapping("/student")
    public studentEntity postStudent(@RequestBody studentEntity studentEntity){
        return studentService.postStudent(studentEntity);
    }

    @GetMapping("/get")
    public List<studentEntity> getAllStudent(){
        return studentService.getAllStudent();
    }

}
