package com.example.StudentBackend.Controller;

import com.example.StudentBackend.DTO.studentDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class studentContorller {

    @GetMapping("/student")
    public studentDTO getStudent(){
        return new studentDTO(56,"Sharwan jung kunwar","sharwankunwar07@gmail.com");
    }

}

