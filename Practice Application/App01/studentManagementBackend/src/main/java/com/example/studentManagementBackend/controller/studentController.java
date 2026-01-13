package com.example.studentManagementBackend.controller;

import com.example.studentManagementBackend.DTO.studentDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class studentController {

    @GetMapping("/student")
    public studentDTO getStudent(){
        return new studentDTO(11L, "Sharwan jung kunwar","sharwankunwar07@gmail.com");
    }
}
