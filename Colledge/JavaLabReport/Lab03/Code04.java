package JavaLab.Lab03;

import java.util.Scanner;

// Write a java program to check input number is odd and divisible by three or even and divisible by three using nested if else statement.

public class Code04 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter the number");
        int num = input.nextInt();

        if (num % 2 == 0) {          // Even
            if (num % 3 == 0) {
                System.out.println("The number is even and divisible by 3");
            } else {
                System.out.println("The number is even but not divisible by 3");
            }
        } else {                    // Odd
            if (num % 3 == 0) {
                System.out.println("The number is odd and divisible by 3");
            } else {
                System.out.println("The number is odd but not divisible by 3");
            }
        }
    }
}
