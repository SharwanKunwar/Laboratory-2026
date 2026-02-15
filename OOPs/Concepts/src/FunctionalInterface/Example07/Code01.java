package FunctionalInterface.Example07;

import java.util.Scanner;
import java.util.function.Predicate;

public class Code01 {



    static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.print("Enter your number : ");
        int number = input.nextInt();

        // predicate which test and return boolean true or false;
        Predicate<Integer> isEven = (n) -> n%2 == 0;
        System.out.println(isEven.test(number) ? "Yes" : "No");
        System.out.println("-------------------------\n");

        for(int i=1; i<=number; i++){
            if(isEven.test(i)){
                System.out.println("Even : "+i);
            }else {
                System.out.println("Odd : "+i);
            }
        }




    }
}
