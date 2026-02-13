package LIB;

abstract public class LibraryController {
    abstract void addBook(Book book);
    abstract void issueBook(int bookId);
    abstract void returnBook(int bookId);
    abstract void removeBook(int bookId);
    abstract void displayAllBooks();
}
