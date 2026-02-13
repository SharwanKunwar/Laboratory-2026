package Test02;

import java.util.HashMap;

public class Library extends LibraryController{

    HashMap<Integer, Book> books = new HashMap<Integer, Book>();

    @Override
    void addBook(Book book) {
        books.put(book.id, book);
    }

    @Override
    void issueBook(int bookId) {

    }

    @Override
    void returnBook(int bookId) {

    }

    @Override
    void removeBook(int bookId) {

    }

    @Override
    void displayAllBooks() {
        for (Book book : books.values()) {
            System.out.println("\n------------------ Book : " + book.id);
            System.out.println(book);
        }
    }
}
