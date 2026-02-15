package FunctionalInterface.Example03;

import java.util.function.Function;

public class Code01 {

    // in-built functionalInterface for performing addition
    public static Function<Integer, Integer> Add = (x) -> x + 1;

    // in-built functionalInterface for performing addition
    public static Function<Integer, Integer> sub = (x) -> x - 1;

    // Function can take two number input if you want to sum of two number you have to use BiFunctional interface coz it takes two value
    public static Function<Integer, Integer> sum = (x) -> x+1;

    // combine method which have both add and sub to run
    public static Function<Integer, Integer> combine = Add.andThen(sub);

    static void main(String[] args) {

        System.out.println(Add.apply(10));
        System.out.println(sub.apply(10));
        System.out.println("--------------------------------");
        System.out.println(combine.apply(10));
    }
}
