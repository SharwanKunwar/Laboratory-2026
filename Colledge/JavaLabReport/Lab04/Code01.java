package JavaLab.Lab04;

// Write a java program to find sum of individual digit of input number using while loop.

import java.util.Scanner;

public class Code01 {
    static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Enter your digit : ");
        int num =  input.nextInt();
        int org = num;
        int sum = 0;

        while(num!=0){
            int digit = num%10;
            sum+=digit;
            num/=10;
        }

        System.out.println("The sum of "+org+" is : "+sum);

    }
}
