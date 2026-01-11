package com.example.App03Backend.controller;

import com.example.App03Backend.DTO.studentDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class studentController {

    @GetMapping("student")
    public studentDTO getStudent(){
        return new studentDTO(22,"sharwan jung kunwar","sharwankunwar07@gmail.com");
    }

}
