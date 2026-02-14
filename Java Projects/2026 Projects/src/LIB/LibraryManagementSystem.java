package LIB;

import java.util.InputMismatchException;
import java.util.Scanner;

public class LibraryManagementSystem {
    static void main(String[] args) {

        Library library = new Library();
        Scanner sc = new Scanner(System.in);
        boolean track = true;
        int op01;

        do{
            try{
                System.out.println("------------------------------------------");
                System.out.println("\t\tLibrary Management System");
                System.out.println("------------------------------------------");
                System.out.println("\t1. Add Book \t\t 2. Delete Book");
                System.out.println("\t3. Issue Book \t\t 4. Return Book");
                System.out.println("\t5. Display Books \t 0. Exit");
                System.out.println("------------------------------------------");

                System.out.print("\tEnter : ");
                op01 = sc.nextInt();

                switch(op01) {

                    case 0:
                        newLine(40);
                        System.out.println("------------------------------------------");
                        System.out.println("Program terminated !!!");
                        System.out.println("------------------------------------------");
                        track = false;
                        break;
                    case 1:
                        newLine(40);
                        try {
                            System.out.println("-------------------- Adding New Book -----");
                            System.out.print("ID: ");
                            int BookId = sc.nextInt();
                            sc.nextLine();
                            System.out.print("Title: ");
                            String BookTitle = sc.nextLine();
                            System.out.print("Author: ");
                            String BookAuthor = sc.nextLine();
                            Book book = new Book(BookId, BookTitle, BookAuthor, track);
                            library.addBook(book);
                            System.out.println("\nBook added successfully");
                            System.out.print("PRESS any button to continue: ");
                        }catch (InputMismatchException e){
                            System.out.println("------------------ IdNotMatched Error ---");
                            System.out.println("\nPlease enter a valid input \nInteger for your book id\n");
                        }
                        break;
                    case 2:
                        System.out.println("Case 02");
                        break;
                    case 3:
                        System.out.println("Case 03");
                        break;
                    case 4:
                        System.out.println("Case 04");
                        break;
                    case 5:
                        newLine(40);
                        System.out.println("--------------- Displaying All Books -----");
                        library.displayAllBooks();
                        break;
                    default:
                        newLine(40);
                        System.out.println("Invalid input !!!");
                }
            }catch (InputMismatchException e){
                newLine(40);
                System.out.println("------------------ InputMissMatch Error ---");
                System.out.println("\nPlease enter a valid input \n[0, 1, 2, 3, 4, 5]\n");

            }
            sc.nextLine();

        }while(track);

    }
    static void newLine(int size){
        for(int i=0; i<size; i++){
            System.out.println();
        }
    }
}
