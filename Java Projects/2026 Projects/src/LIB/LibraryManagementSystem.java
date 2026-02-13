package LIB;

import java.util.Scanner;

public class LibraryManagementSystem {
    static void main(String[] args) {

        Library library = new Library();
        Scanner sc = new Scanner(System.in);
        boolean track = true;

        do{
            System.out.println("------------------------------------------");
            System.out.println("\t\tLibrary Management System");
            System.out.println("------------------------------------------");
            System.out.println("\t1. Add Book \t\t 2. Delete Book");
            System.out.println("\t3. Issue Book \t\t 4. Return Book");
            System.out.println("\t5. Display Books \t\t 0. Exit");
            System.out.println("------------------------------------------");
            System.out.print("\tEnter : ");
            int op01 = sc.nextInt();

            switch(op01) {
                case 1:
                    newLine(40);
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
                    System.out.println("-------------------- Displaying All Books -----");
                    library.displayAllBooks();
                    break;
                default:
                    System.out.println("Invalid input");
            }
        }while(track);

    }
    static void newLine(int size){
        for(int i=0; i<size; i++){
            System.out.println();
        }
    }
}
