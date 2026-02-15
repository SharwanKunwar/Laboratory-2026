package FunctionalInterface.Example09;

import java.util.function.BiFunction;

public class Code01 {

    public static BiFunction<String, Double, String> formatter = (title, price) -> title+" Costs "+price;

    static void main(String[] args) {
        // BiFunction
        // Real world example of in-built FunctionalInterface
//        BiFunction<String, Double, String> formatter = (title, price) -> title+" Costs "+price;

        System.out.println(formatter.apply("The law of power",500.45));
        System.out.println(formatter.apply("The power of subconscious",210.45));
        System.out.println(formatter.apply("Math",100.1));
        System.out.println(formatter.apply("English",140.1));
    }
}
