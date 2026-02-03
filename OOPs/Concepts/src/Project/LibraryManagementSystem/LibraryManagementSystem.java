package Project.LibraryManagementSystem;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

public class LibraryManagementSystem {
    static void main(String[] args) {

        List<String> Books = new ArrayList<String>();

        Scanner input = new Scanner(System.in);
        boolean track = true;

        do {

            System.out.println("--------------------------------------------");
            System.out.println("\t\tLibrary Management System");
            System.out.println("--------------------------------------------");
            System.out.println("\t1.Add Book\t\t2.Remove Book");
            System.out.println("\t3.Issue Book\t4.Return Book");
            System.out.println("\t5.View Books\t0.Exit");
            System.out.println("--------------------------------------------");
            System.out.print("Enter : ");
            int op = input.nextInt();

            switch (op) {
                case 0:
                    newLine(40);
                    System.out.println("\t\t\t\tThank you for visiting");
                    System.out.println("\t\t\t\t-------------------------------------");
                    System.out.println("\t\t\t\t"+new Date());
                    newLine(20);
                    track = false;
                    break;
                case 1:
                    newLine(40);
                    System.out.println("Adding Book ----------------------------------------");
                    System.out.println("Enter Book : ");
                    String bookName = input.next();
                    Books.add(bookName);
                    break;
                case 2:
                    newLine(40);
                    System.out.println("case 2");
                    break;
                case 3:
                    newLine(40);
                    System.out.println("case 3");
                    break;
                case 4:
                    newLine(40);
                    System.out.println("case 4");
                    break;
                case 5:
                    newLine(40);
                    System.out.println("Displaying Books --------------------------------------------------");
                    for(String Book: Books){
                        System.out.println(Book);
                    }
                    System.out.println("-------------------------------------------------------------------");
                    break;
                default:
                        System.out.println("Invalid input");

            }


        }while (track);

    }
    static void newLine(int line){
        for(int i = 0; i < line; i++){
            System.out.println();
        }
    }
}
