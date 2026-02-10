package ExceptionHandling;

public class Code01 {
    static void main(String[] args) {
        int a = 10;
        int b = 0;

        try{
            int result = a/b;
            System.out.println(result);
        }catch(ArithmeticException e){
            System.out.println(e.getMessage());
        }

        System.out.println("Normal termination with try catch");



    }
}
