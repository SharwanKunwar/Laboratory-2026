package StreamPipeline.streamAPI;

import java.util.Arrays;
import java.util.List;

// find sum of all numbers in given array
public class Reduce {
    static void main(String[] args) {

//        int [] numbers = {1,2,3,4,5};
//        int sum = Arrays.stream(numbers).sum();
//        System.out.println(sum);

        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        //        int sum = numbers.stream().reduce(0, Integer::sum);
        int sum = numbers.stream().reduce(0,(acc,element)->acc+element);
        System.out.println(sum);

    }
}
