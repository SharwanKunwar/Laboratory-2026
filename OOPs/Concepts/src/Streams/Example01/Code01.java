package Streams.Example01;

// Streams --> assembly/ pipeline
// here we descus about 5 w's

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class Code01 {
    static void main(String[] args) {
        List<String> items = Arrays.asList("apple", "banana", "cat");

        int [] marks = {3,4,5,6,2};

        System.out.println("------------------------ Method01");
        //method 01 to print
        items.forEach(System.out::println);


        System.out.println("------------------------ Method02");
        for(String item : items){
            System.out.println(item);
        }

        System.out.println("------------------------ Method03");
        // stream using strem
        Stream<String> stream = items.stream();
        stream.forEach((a)-> System.out.println(a));

        System.out.println("------------------------ Method04");
        Stream<Integer> hold = Arrays.stream(marks).boxed();
        hold.forEach(System.out::println);




    }
}
