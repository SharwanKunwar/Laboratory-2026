package Day02_Constructor.Example02;

public class Book {
    String name;
    String author;
    int pages;
    int price;


    public Book() {
        System.out.println("Book Created");
    }
    public Book(String name, String author, int pages, int price) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.price = price;
    }
    public void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Author: " + author);
        System.out.println("Pages: " + pages);
        System.out.println("Price: " + price);
    }
}
