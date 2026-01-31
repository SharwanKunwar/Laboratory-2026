package JavaLab.Lab03;

import java.util.Scanner;

// Write a java program to find second-largest number among three input number using else if ladder statement

public class Code03 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Enter the 1st number: ");
        int num1 = input.nextInt();

        System.out.println("Enter the 2nd number: ");
        int num2 = input.nextInt();

        System.out.println("Enter the 3rd number: ");
        int num3 = input.nextInt();

        int max, secondLargest;

        if (num1 >= num2 && num1 >= num3) {
            max = num1;
            secondLargest = (num2 >= num3) ? num2 : num3;
        }
        else if (num2 >= num1 && num2 >= num3) {
            max = num2;
            secondLargest = (num1 >= num3) ? num1 : num3;
        }
        else {
            max = num3;
            secondLargest = (num1 >= num2) ? num1 : num2;
        }

        System.out.println("The maximum number is : " + max);
        System.out.println("The second largest number is : " + secondLargest);
    }
}
