package StreamPipeline;

import java.util.Arrays;
import java.util.List;

public class Code01 {
    static void main(String[] args) {

        // list of numbers
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);     // Source

        // filtering the even number using stream pipeline with lambda expression
        List<Integer> evenNumbers = numbers.stream()
                .filter(n -> n%2 == 0)   // intermediate operation(filtering)
                .toList();                      // Terminal operation (collecting)

        // printing the evenNumbers list with method reference even shorter than lambda expression
        evenNumbers.forEach(System.out::println);
    }
}
