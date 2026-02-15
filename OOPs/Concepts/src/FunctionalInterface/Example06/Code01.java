package FunctionalInterface.Example06;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class Code01 {

    public static Consumer<Integer> consumer = (n) -> System.out.println(n*2);

    static void main(String[] args) {

        List<Integer> list = Arrays.asList(1,2,3,4,5);

        list.forEach(consumer);

    }
}
