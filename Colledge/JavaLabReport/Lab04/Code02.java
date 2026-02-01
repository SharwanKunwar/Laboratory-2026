package JavaLab.Lab04;

// Write a java program to check input number is prime or not.

import java.util.Scanner;

public class Code02 {
    static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        System.out.println("Enter your number : ");
        int num = input.nextInt();
        boolean isPrime = true;

        if(num<1){
            isPrime = false;
        }else{
            for(int i=2; i*i<=num; i++){
                if(num%i==0){
                    isPrime = false;
                }
            }
        }

        if(isPrime) System.out.println("Prime number");
        else System.out.println("Not Prime number");


    }
}
