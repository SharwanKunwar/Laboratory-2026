package com.example.DatabasePostgresqlConnect.DTO;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class studentDTO {
    @Id
    private int id;
    private String name;
    private String email;
}
