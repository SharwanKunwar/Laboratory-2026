package JavaLab.Lab02;

import java.util.Scanner;

public class Code05 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter first number: ");
        int a = sc.nextInt();

        System.out.print("Enter second number: ");
        int b = sc.nextInt();

        // Bitwise AND
        System.out.println("Bitwise AND (a & b): " + (a & b));

        // Bitwise OR
        System.out.println("Bitwise OR (a | b): " + (a | b));

        // Bitwise XOR
        System.out.println("Bitwise XOR (a ^ b): " + (a ^ b));

        // Bitwise NOT
        System.out.println("Bitwise NOT (~a): " + (~a));
        System.out.println("Bitwise NOT (~b): " + (~b));

        // Left Shift
        System.out.println("Left Shift (a << 1): " + (a << 1));
        System.out.println("Left Shift (b << 1): " + (b << 1));

        // Right Shift
        System.out.println("Right Shift (a >> 1): " + (a >> 1));
        System.out.println("Right Shift (b >> 1): " + (b >> 1));
    }
}
