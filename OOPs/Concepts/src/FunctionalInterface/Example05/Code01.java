package FunctionalInterface.Example05;

import java.util.function.Consumer;

public class Code01 {
    // consumer interface using lambda method reference
    public static Consumer<String> consumer01 = System.out::println;
    public static Consumer<Integer> consumer02 = System.out::println;


    static void main(String[] args) {

        int a = 2, b = 2;
        int result  = a+b;
        consumer02.accept(result);
        consumer01.accept("Fuck");
    }
}



// seek more try more little bit more