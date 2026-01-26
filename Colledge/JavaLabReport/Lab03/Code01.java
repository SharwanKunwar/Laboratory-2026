package JavaLab.Lab03;

import java.util.Scanner;

public class Code01 {
    static void main(String[] args) {
        Scanner sc  = new Scanner(System.in);
        System.out.print("Enter your number: ");
        int num = sc.nextInt();

        if(num%2== 0) System.out.println("Even");
        else System.out.println("Odd");

    }
}
