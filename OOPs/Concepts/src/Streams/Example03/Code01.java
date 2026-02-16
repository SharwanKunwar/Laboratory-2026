package Streams.Example03;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class Code01 {
    static void main(String[] args) {

        System.out.println("---------------- Streams Examples and demonstration ----------------");
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        Stream<Integer> stream = list.stream();

        System.out.println("----------------------- Example01");
        // finding even numbers
        list.stream().filter(num -> num%2 == 0).forEach(System.out::println);

        System.out.println("----------------------- Example02");
        // finding odd numbers
        list.stream().filter(num -> num%2 != 0).forEach(System.out::println);

        System.out.println("----------------------- Example03");
        // finding the number which is smaller then 5
        list.stream().filter(num -> num<5).forEach(System.out::println);
    }
}

// so the stream is good I like this