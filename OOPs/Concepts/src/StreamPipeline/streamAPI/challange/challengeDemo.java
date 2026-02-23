package StreamPipeline.streamAPI.challange;

import java.util.List;

public class challengeDemo {
    static void main(String[] args) {
        BookStore bookStore = new BookStore();

        Book b1 = new Book("book01","sharwan",100,2022);
        bookStore.addBook(b1);
        Book b2 = new Book("book02","sharwan",100,2023);
        bookStore.addBook(b2);
        Book b3 = new Book("book03","sharwan",100,2024);
        bookStore.addBook(b3);
        Book b4 = new Book("book04","sharwan",100,2025);
        bookStore.addBook(b4);

        int result = bookStore.TotalCostOfBooks();
        System.out.println(result);

        List<String> bookTitles = bookStore.allBookTitle();
        bookTitles.forEach(System.out::println);

    }
}
