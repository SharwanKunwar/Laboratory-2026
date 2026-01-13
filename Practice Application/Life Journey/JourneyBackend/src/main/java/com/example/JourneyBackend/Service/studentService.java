package com.example.JourneyBackend.Service;

import com.example.JourneyBackend.Entity.studentEntity;
import com.example.JourneyBackend.Repository.studentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class studentService {

    private final studentRepository studentRepository;

    public studentEntity postStudent(studentEntity studentEntity){
        return studentRepository.save(studentEntity);
    }

    public List<studentEntity> getAllStudent(){
        return studentRepository.findAll();
    }
}
