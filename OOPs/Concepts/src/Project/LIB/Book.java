package Project.LIB;

public class Book{
    private long id;
    private String name;
    private String author;
    private String category;
    String status = "Available";
    private String issuedTo = "None";
    private int pages;
    private int price;

    Book(long id,String name, String author, String category, int pages, int price) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.category = category;
        this.pages = pages;
        this.price = price;
    }

    public String getIssuedTo() {
        return issuedTo;
    }

    public void setIssuedTo(String issuedTo) {
        this.issuedTo = issuedTo;
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

    public String isStatus() {
        return status;
    }

    public int getPages() {
        return pages;
    }

    public int getPrice() {
        return price;
    }
}
