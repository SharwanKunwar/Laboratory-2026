package JavaLab.Lab08.Problem01;

// Write a java program to demonstrate ArithmeticException, ArrayIndexOutOfBoundsException, and NumberFormateException

import java.util.Scanner;

public class Code {
    public static void main(String[] args) {
        Scanner in  = new Scanner(System.in);


        int [] numbers = {1,2,3};

        System.out.println("-------------------- ArithmeticException --------------------");
        int a = 5,b=0;
        try{
            int div = a/b;
        } catch (ArithmeticException e) {
            System.out.println("Division by zero");
        }


        System.out.println("-------------------- ArrayIndexOutOfBoundsException --------------------");
        try{
            System.out.println(numbers[3]);
        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println("Array Index Out Of Bounds Error aayo");
        }

        System.out.println("-------------------- NumberFormateException --------------------");
        System.out.println("Enter your option: ");

        try{
            int op = in.nextInt();
        }catch (NumberFormatException e){
            System.out.println("Number Format Error aayo");
        }

    }
}
