package Project.LIB;

public class Book{
    String name;
    String author;
    String category;
    boolean status;
    int pages;
    int price;

    Book(String name, String author, String category, boolean status, int pages, int price) {
        this.name = name;
        this.author = author;
        this.category = category;
        this.status = status;
        this.pages = pages;
        this.price = price;
    }
}
