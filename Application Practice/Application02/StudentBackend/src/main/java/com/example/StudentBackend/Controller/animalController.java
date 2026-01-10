package com.example.StudentBackend.Controller;

import com.example.StudentBackend.DTO.animalDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class animalController {

    @GetMapping("/animal")
    public animalDTO getAnimal(){
        return new animalDTO(5,"puppy","black");
    }
}
