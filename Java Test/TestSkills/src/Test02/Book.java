package Test02;

public class Book {
    int id;
    String title;
    String author;
    boolean isIssued;

    public Book(int id, String title, String author) throws missingIDException{
        if(id < 0 ) throw new missingIDException("ID cannot be negative");
        else this.id = id;
        this.title = title;
        this.author = author;
        this.isIssued = false;
    }
    @Override
    public String toString() {
        return "Title: " + title +
                ", \nAuthor: " + author +
                ", \nisIssued: " + isIssued;
    }


}
