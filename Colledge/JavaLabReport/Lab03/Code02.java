package JavaLab.Lab03;

import java.util.Scanner;

public class Code02 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num = input.nextInt();

        if(num < 0){
            System.out.println("Negative number");
        } else if(num > 0){
            System.out.println("Positive number");
        }else {
            System.out.println("Zero number");
        }
    }
}
