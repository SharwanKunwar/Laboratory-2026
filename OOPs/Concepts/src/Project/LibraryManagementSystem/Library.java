package Project.LibraryManagementSystem;

import Day02_Constructor.Example02.Book;

import java.util.ArrayList;
import java.util.List;

public class Library {
    List<Book> books = new ArrayList<>();

    void addBook(Book book) {
        System.out.println("Adding Book");
    }
    void deleteBook(Book book) {
        System.out.println("Deleting Book");
    }
    void updateBook(Book book) {
        System.out.println("Updating Book");
    }
    void issueBook(Book book) {
        System.out.println("Issuing Book");
    }
    void returnBook(Book book) {
        System.out.println("Returning Book");
    }

}
