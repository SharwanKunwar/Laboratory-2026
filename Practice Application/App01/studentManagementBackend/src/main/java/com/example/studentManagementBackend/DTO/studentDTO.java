package com.example.studentManagementBackend.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class studentDTO {
    private Long id;
    private String name;
    private String email;
}
