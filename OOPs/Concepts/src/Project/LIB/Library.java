package Project.LIB;

import java.util.ArrayList;
import java.util.List;

public class Library {

    List<Book> bookList = new ArrayList<>();

    //Add method
    void addBook(Book book) {
        bookList.add(book);
    }
    //Delete book method
    void deleteBook(Book book) {
        System.out.println("deleting book");
    }
    //Update book
    void updateBook(Book book) {
        System.out.println("updating book");
    }
    //Issue book
    void issueBook(Book book) {
        System.out.println("issuing book");
    }
    //return book
    void returnBook(Book book) {
        System.out.println("returning book");
    }
    void displayBooks() {
        System.out.println("displaying books----------");
        for(Book book : bookList) {
            System.out.println(book);
        }
    }
}
