package com.example.Application01Backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class Person {


    String quote = "have you seen that what you are seeking for.";

    @GetMapping("say")
    public String sayHello(){
        return "hey good morning!.";
    }
    @GetMapping("quote")
    public String line(){
        return this.quote;
    }
}
