package FunctionalInterface.Example02;

public class Code01 {
    static void main(String[] args) {
        Calculator calculator = Integer::sum;
        int Result = calculator.sum(2,2);
        System.out.println(Result);
    }
}
