package Streams.Example02;

// Wrtie a program with use stream to find world from the given array which start from a

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class Code01 {
    static void main(String[] args) {
        List<String> names = Arrays.asList("apple","mango","orange","avocado");

        Stream<String> stream = names.stream();

        // way 01
//        stream.filter(name ->
//                name.startsWith("a"))
//                .forEach(System.out::println);

        //way 02
        Stream<String> filterStream = stream.filter(name -> name.startsWith("a"));
        filterStream.forEach(System.out::println);


        // way 03 one-liner
        names.stream().filter(name->name.startsWith("a")).forEach(System.out::println);
    }
}

// demonstration of chaining and stream filter and forEach with lambda
