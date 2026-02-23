package StreamPipeline.streamAPI.challange;

public class Book {
    String title;
    String author;
    int price;
    int publishYear;

    public int getPrice() {
        return price;
    }
    public String getTitle(){
        return title;
    }

    Book(String title, String author, int price, int publishYear) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.publishYear = publishYear;
    }

}
