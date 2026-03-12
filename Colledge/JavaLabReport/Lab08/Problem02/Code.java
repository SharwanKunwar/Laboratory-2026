package JavaLab.Lab08.Problem02;

//2. Write a java program that will read balance and withdraw amount from keyboard and display the remaining balance on screen if the balance is greater than withdraw amount otherwise throw an exception with appropriate message.


import java.util.Scanner;

public class Code {
    public static void main(String[] args) throws Exception {

        Scanner in = new Scanner(System.in);

        int balance = 10000;
        System.out.println("Your balance is : "+balance);
        System.out.println("-----------------------------------");
        System.out.print("Enter your withdrawal amount : ");
        int withdraw = in.nextInt();


        if(withdraw>balance){
            throw new Exception("Not enough balance");
        }else {
            System.out.println("Your balance is : "+balance);
            System.out.println("Your withdrawal amount is : "+withdraw);
            int finalBalance = balance - withdraw;
            System.out.println("Your balance is : "+finalBalance);
        }
    }
}
