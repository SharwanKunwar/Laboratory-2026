package Test01;

public class Code01 {
    static void main(String[] args) {
        Book b1 = new Book("Engish","sharwan",false);
        Book b2 = new Book("math","parbesh",true);
        Library library = new Library();
        library.addBook(b1);
        library.addBook(b2);
        library.displayBook();
    }
}
