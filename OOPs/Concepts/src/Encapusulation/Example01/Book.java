package Encapusulation.Example01;

public class Book {
    private String title;
    private String author;
    int pages;

    public Book(String title, String author, int pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    public String getAuthor() {
        return author;
    }
    public String getTitle() {return title;}

}
