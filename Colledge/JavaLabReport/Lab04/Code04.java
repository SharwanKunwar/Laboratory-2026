package JavaLab.Lab04;

// Write a java program to test given input number is Armstrong or not.

/*
    An Armstrong number (or narcissistic number) is a positive integer
    that equals the sum of its own digits, each raised to the power of
    the total number of digits. For instance, \(153\) is a 3-digit Armstrong
    number because \(1^{3}+5^{3}+3^{3}=1+125+27=153\). Other examples include \(0,1,370,371,407,\text{\ and\ }1634\). 
 */

import java.util.Scanner;

public class Code04 {
    static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = input.nextInt();
        int org = num;
        int count = 0;
        int sum = 0;

        while(num!=0){
            count++;
            num/=10;
        }

        num = org;

        for(; num!=0; num/=10){
            int digit = num%10;
            sum+=(int)Math.pow(digit,count);
        }

        if(org == sum) System.out.println("Armstrong");
        else System.out.println("not Armstrong number");
    }
}
