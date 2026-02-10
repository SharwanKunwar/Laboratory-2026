package Project.LIB;

import java.util.Date;
import java.util.Scanner;

public class LibraryManagementSystem {
    static void main(String[] args) {


        Library l1 = new Library();

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
                    boolean more = true;
                    System.out.println("----------------------------------- Adding Book -----");

                    do{
                        input.nextLine();
                        System.out.print("\nBook Name: ");
                        String bookName = input.nextLine();

                        System.out.print("Book ID: ");
                        int  bookId = input.nextInt();

                        input.nextLine();   // buffer

                        System.out.print("Author: ");
                        String author = input.nextLine();

                        System.out.print("Category: ");
                        String category = input.nextLine();


                        System.out.print("Pages: ");
                        int pages = Integer.parseInt(input.nextLine());

                        System.out.print("Price: ");
                        int price = Integer.parseInt(input.nextLine());

                        Book b1 = new Book(bookId,bookName, author, category, pages, price);
                        l1.addBook(b1);
                        System.out.print("\nWanna add more (y/n) : ");
                        char addMore = input.next().charAt(0);
                        if(addMore == 'n' || addMore == 'N'){
                            more = false;
                        }


                    }while(more);

                    break;

                case 2:
                    newLine(40);
                    if(l1.bookList.isEmpty()){
                        System.out.println("There are no Books in the Library");
                        break;
                    }
                    System.out.println("-------------------- Removing Books -----");
                    System.out.print("Enter The book ID: ");
                    int Id = input.nextInt();
                    System.out.println("-----------------------------------------");
                    l1.deleteBook(Id);

                    break;
                case 3:
                    newLine(40);
                    if(l1.bookList.isEmpty()){
                        System.out.println("There are no Books in the Library");
                        break;
                    }
                    System.out.println("------------------------- Issue Book -----");
                    System.out.print("Enter The book ID: ");
                    int issueBookId = input.nextInt();

                    input.nextLine();


                    l1.issueBook(issueBookId);

                    break;
                case 4:
                    newLine(40);
                    System.out.println("case 4");
                    break;
                case 5:
                    newLine(40);
                    System.out.println("-------------------- Displaying Books -----");
                    if(l1.bookList.isEmpty()) {
                        System.out.println("\nNo books in the library");
                    }
                    l1.displayBooks();
                    newLine(2);

                    break;
                default:
                    System.out.println("Invalid input");

            }


        }while (track);
    }
    static void newLine(int n) {
        for (int i = 0; i < n; i++) {
            System.out.println();
        }
    }
}
