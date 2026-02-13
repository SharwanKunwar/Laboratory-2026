package LIB;

import java.util.HashMap;

public class Library extends LibraryController{
    HashMap<Integer, Book> books = new  HashMap<>();


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

        if(books.isEmpty()){
            System.out.println("No books found\n\n");
            return;
        }
        for(Book book : books.values()){
            System.out.println("\n---------------------- Book "+book.id);
            System.out.println("ID: "+book.id);
            System.out.println("Title: "+book.title);
            System.out.println("Author: "+book.author);
            if(book.status) System.out.println("Available");
            else System.out.println("Not Available");
        }
    }
}
