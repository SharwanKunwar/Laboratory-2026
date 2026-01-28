package Inheritence.Example02;

import java.util.Scanner;

public class DemoCode01 {
    static void main(String[] args) throws InterruptedException {

        Scanner input = new Scanner(System.in);

        Car obj01 = new Car("Supra","whtie",10000,"mk4",true);

        System.out.println("-----------------------------------------------------");
        System.out.println("1. View All Details\t 2. Check status");
        System.out.println("3. Start \t\t\t 4. Stop");
        System.out.println("5. Horn \t");
        System.out.println("-----------------------------------------------------");
        System.out.print("Enter your choice : ");
        int choice = input.nextInt();


        switch (choice) {
            case 1:
                obj01.ViewDetails();
                break;
            case 2:
                obj01.status();
                break;
            case 3:
                obj01.start();
                break;
            case 4:
                obj01.stop();
                break;

            case 5:
                obj01.horn();
                break;

                default:
                    System.out.println("Invalid choice");

        }







    }
}
