package Project.LIB;

public class Book{
    private long id;
    private String name;
    private String author;
    private String category;
    boolean status;
    private int pages;
    private int price;

    Book(long id,String name, String author, String category, boolean status, int pages, int price) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.category = category;
        this.status = status;
        this.pages = pages;
        this.price = price;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getAuthor() {
        return author;
    }

    public String getCategory() {
        return category;
    }

    public boolean isStatus() {
        return status;
    }

    public int getPages() {
        return pages;
    }

    public int getPrice() {
        return price;
    }
}
