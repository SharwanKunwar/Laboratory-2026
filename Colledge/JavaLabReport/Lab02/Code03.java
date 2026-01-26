package JavaLab.Lab02;

import java.util.Scanner;

public class Code03 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter first number: ");
        int a = sc.nextInt();

        System.out.print("Enter second number: ");
        int b = sc.nextInt();

        System.out.print("Enter third number: ");
        int c = sc.nextInt();

        // Finding the largest number using ternary operator
        int largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);

        // Finding the smallest number using ternary operator
        int smallest = (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);

        System.out.println("Largest number = " + largest);
        System.out.println("Smallest number = " + smallest);
    }
}
