package JavaLab.Lab03;

import java.util.Scanner;


// Write a java program to input two number and arithmetic operator from user and perform all arithmetic operation (+,-,*,/,%) using switch case statement.

public class Code05 {
    static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter the first number: ");
        int num1 = input.nextInt();
        System.out.print("Chose the operation [ +, -, x, /, % ] : ");
        char operation = input.next().charAt(0);
        System.out.print("Enter the second number: ");
        int num2 = input.nextInt();

        if(num1 < 1){
            System.out.println("not allowed");
        }else  if(num2 < 1){
            System.out.println("not allowed");
        }

        switch (operation) {
            case '+':
                System.out.println(num1 + num2);
                break;
            case '-':
                System.out.println(num1 - num2);
                break;
            case '*':
                System.out.println(num1 * num2);
                break;
            case '/':
                System.out.println(num1 / num2);
                break;
            case '%':
                System.out.println(num1 % num2);
                break;
            default:
                System.out.println("Invalid input");
        }



    }
}
