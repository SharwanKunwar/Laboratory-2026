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

                        System.out.print("Author: ");
                        String author = input.nextLine();

                        System.out.print("Category: ");
                        String category = input.nextLine();

                        System.out.print("Status (true/false): ");
                        boolean status = Boolean.parseBoolean(input.nextLine());

                        System.out.print("Pages: ");
                        int pages = Integer.parseInt(input.nextLine());

                        System.out.print("Price: ");
                        int price = Integer.parseInt(input.nextLine());

                        Book b1 = new Book(bookName, author, category, status, pages, price);
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
                    int count = 0;
                    System.out.println("-------------------- Displaying Books -----");
                    if(l1.bookList.isEmpty()) {
                        System.out.println("\nNo books in the library");
                    }
                    for(Book book : l1.bookList){
                        count++;
                        System.out.println("\n----------------- Book count "+count+" ---");
                        System.out.println("Name: "+book.name);
                        System.out.println("Author: "+book.author);
                        System.out.println("Category: "+book.category);
                        System.out.println("Status: "+book.status);
                        System.out.println("Pages: "+book.pages);
                        System.out.println("Price: "+book.price);
                    }
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
