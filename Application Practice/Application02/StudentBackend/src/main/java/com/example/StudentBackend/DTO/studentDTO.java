package com.example.StudentBackend.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class studentDTO {
    private int id;
    private String name;
    private String email;
}
