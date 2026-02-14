package FunctionalInterface.Example01;


import java.util.function.Function;
import java.util.function.Supplier;

public class Code01 {

//    in-build functionalInterface
    public static Function<Integer, Integer> add = x -> x + 10;

    static Supplier<Integer> ad = () -> {
        int random = (int) (Math.random() * 10);
        return random+1;
    };

    static void main(String[] args) {

        BookAction bookAction = () -> System.out.println("My name is Sharwan jung kuwnar");
        System.out.println("----------------------------- Implementation 01 ------");
        bookAction.action();
        System.out.println("\n----------------------------- Implementation 02 ------");
        Calculator calculator = (a,b) -> System.out.println(a+b);
        calculator.sum(1, 2);
        System.out.println("\n----------------------------- Implementation 03 ------");
        SI simpleInterest = (p,t,r) -> System.out.println("Your simple interest is : "+(p*t*r)/100);
        simpleInterest.simpleInterest(100,2,4);
        System.out.println("\n----------------------------- Implementation 04 ------");
        System.out.println(add.apply(5));
        System.out.println("\n----------------------------- Implementation 05 ------");
        System.out.println("Random number is : "+ad.get());


    }
}
