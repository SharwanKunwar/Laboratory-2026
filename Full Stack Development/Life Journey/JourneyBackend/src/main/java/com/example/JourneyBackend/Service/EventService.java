package com.example.JourneyBackend.Service;

import com.example.JourneyBackend.Entity.EventEntity;
import com.example.JourneyBackend.Repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EventService {

    private final EventRepository eventRepository;

    //post
    public EventEntity postEvent(EventEntity eventEntity){
        return eventRepository.save(eventEntity);
    }

    //get
    public List<EventEntity> getAllEvent(){
        return eventRepository.findAll();
    }

}
