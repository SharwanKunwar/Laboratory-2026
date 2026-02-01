package JavaLab.Lab04;

// Write a java program to find sum of odd number from 1 to 50 using continue statement.

import java.util.Scanner;

public class Code05 {
    static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter number: ");
        int num = input.nextInt();
        int oddSum = 0;

        for(int i=1;i<=num;i++){
            if(i%2==0) continue;
            else oddSum+=i;
        }
        System.out.println("The odd sum is "+oddSum);

    }
}
