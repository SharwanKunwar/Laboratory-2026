package JavaLab.Lab03;

import java.util.Scanner;

public class Code03 {
    static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the 1st number: ");
        int num1 = input.nextInt();

        System.out.println("Enter the 2nd number: ");
        int num2 = input.nextInt();

        System.out.println("Enter the 3rd number: ");
        int num3 = input.nextInt();

        if(num1>=num2 && num1>=num3){
            System.out.println("The number greater number is : "+num1);
        }else if(num2>=num1 && num2>=num3){
            System.out.println("The number greater number is : "+num2);
        }else{
            System.out.println("The number greater number is : "+num3);
        }


    }
}
