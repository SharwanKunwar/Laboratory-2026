package Test01;

public class Book {
    String title;
    String author;
    boolean issuedTo;

    public Book(String title, String author, boolean issuedTo) {

        this.title = title;
        this.author = author;
        this.issuedTo = issuedTo;
    }

    void display() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Issued to: " + issuedTo);
    }

}
