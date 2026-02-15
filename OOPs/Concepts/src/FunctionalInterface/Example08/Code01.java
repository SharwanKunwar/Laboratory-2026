package FunctionalInterface.Example08;

import java.util.function.Function;
import java.util.function.Supplier;
import java.util.*;

// suppler interface
public class Code01 {
    static void main(String[] args) {

        Supplier<Double> randomNumber = Math::random;
        System.out.println(randomNumber.get());

    }
}
//Random number generator from the FunctionalInterface with lambda Expression
// and it is in-built