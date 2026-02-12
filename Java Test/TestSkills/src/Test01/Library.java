package Test01;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Library {

    List<Book> books = new ArrayList<Book>();

    public void addBook(Book book) {
        books.add(book);
    }

    public void displayBook() {
        int count = 1;
        for(Book book : books) {
            System.out.println("\n----------------------------------- Book "+count);
            System.out.println("Title: "+book.title);
            System.out.println("Author: "+book.author);
            if(book.issuedTo) System.out.println("Status: Not Available");
            else System.out.println("Status: Available");
            count++;
        }
    }


}
