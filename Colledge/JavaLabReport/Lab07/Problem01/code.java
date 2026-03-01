package JavaLab.Lab07.Problem01;

// Write a Java program to find the factorial and nth Fibonacci term using recursion.

public class code {
    public static void main(String[] args) {
        int num = 5;

        int factResult = factorial(num);
        System.out.println("Factorial: " + factResult);

        int fibResult = fibonacci(num);
        System.out.println("Fibonacci: " + fibResult);
    }

    // Recursive factorial function
    static int factorial(int n){
        if(n == 0 || n == 1) return 1;
        return n * factorial(n - 1);
    }

    // Recursive fibonacci function
    static int fibonacci(int x){
        if(x == 0) return 0;
        if(x == 1) return 1;
        return fibonacci(x - 1) + fibonacci(x - 2);
    }
}