package Project.LIB;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;

public class Library {

    List<Book> bookList = new ArrayList<>();

    //Add method
    void addBook(Book book) {
        bookList.add(book);
    }

    void deleteBook(int id) {
        Iterator<Book> iterator = bookList.iterator();
        boolean found = false;

        while (iterator.hasNext()) {
            Book book = iterator.next();

            if (book.getId() == id) {
                System.out.println("Name: " + book.getName());
                System.out.println("Author: " + book.getAuthor());
                System.out.println("Category: " + book.getCategory());
                System.out.println("Status: " + book.status);
                System.out.println("Pages: " + book.getPages());
                System.out.println("Price: " + book.getPrice());

                iterator.remove(); // ✅ DELETE HERE
                found = true;
                System.out.println("Book Deleted Successfully");
                break;
            }
        }

        if (!found) {
            System.out.println("Book not found!");
        }
    }



    //Update book
    void updateBook(Book book) {
        System.out.println("updating book");
    }

    //Issue book
    void issueBook(int id) {
        String issueTo = "";
        boolean found = false;
        Scanner input = new Scanner(System.in);
        for(Book book : bookList) {

            if (book.getId() == id) {
                book.status = "Not available";
                System.out.print("Issue to whom : ");
                issueTo = input.nextLine();
                input.close();
                book.setIssuedTo(issueTo);
                found = true;
            }
        }
        // check found or not
        if (found) {
            for(Book book : bookList) {
                System.out.println("\nBook "+book.getName()+"\nIssued to "+issueTo);
                break;
            }
        }else{
            System.out.println("Book ID: " + id+ " is not found");
        }
    }

    //return book
    void returnBook(Book book) {
        System.out.println("returning book");
    }
    void displayBooks() {
        int count = 0;
        for(Book book : bookList){
            count++;
            System.out.println("\n----------------- Book count "+count+" ---");
            System.out.println("Book ID: "+book.getId());
            System.out.println("Name: "+book.getName());
            System.out.println("Author: "+book.getAuthor());
            System.out.println("Category: "+book.getCategory());
            System.out.println("Status: "+book.status);
            System.out.println("IssuedTo: "+book.getIssuedTo());
            System.out.println("Pages: "+book.getPages());
            System.out.println("Price: "+book.getPrice());
        }
    }
}
