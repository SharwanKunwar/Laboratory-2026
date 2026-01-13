package com.example.JourneyBackend.Controller;

import com.example.JourneyBackend.Entity.EventEntity;
import com.example.JourneyBackend.Service.EventService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
@RequestMapping("/api")
public class EventController {

    private final EventService eventService;

    //post
    @PostMapping("/post")
    public EventEntity postEvent(@RequestBody EventEntity eventEntity){
        return eventService.postEvent(eventEntity);
    }

    //get
    @GetMapping("/get")
    public List<EventEntity> getAllEvent(){
        return eventService.getAllEvent();
    }
}
