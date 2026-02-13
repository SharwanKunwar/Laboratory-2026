package LIB;

public class Book {
    int id;
    String title;
    String author;
    boolean status = true;

    public Book(int id, String title, String author, boolean status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.status = status;
    }

    @Override
    public String toString() {
        return "Library{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", status=" + status +
                '}';
    }
}
