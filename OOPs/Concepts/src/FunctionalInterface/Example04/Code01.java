package FunctionalInterface.Example04;

import java.util.function.BiFunction;

public class Code01 {

    // BiFunction for adding two number
    public  static BiFunction<Integer, Integer, Integer> add = (a, b) -> a+b;

//    You can also do this lambda expression shorter form
//    public  static BiFunction<Integer, Integer, Integer> add = Integer::sum;

    // BiFunction for subtracting two number
    public  static BiFunction<Integer, Integer, Integer> sub = (a,b) -> a-b;


    static void main(String[] args) {

        System.out.println(add.apply(2,2));
        System.out.println(sub.apply(2,2));
    }
}
