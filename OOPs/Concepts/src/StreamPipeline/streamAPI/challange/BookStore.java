package StreamPipeline.streamAPI.challange;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

public class BookStore {
    List<Book> bookList = new ArrayList<Book>();

    // add books
    public void addBook(Book book) {
        bookList.add(book);
    }

    public int TotalCostOfBooks(){
         int totalCost = bookList.stream()
                 .mapToInt(book -> book.getPrice())
                 .sum();

         return totalCost;
    }
    public List<String> allBookTitle(){
        return bookList.stream().map(Book::getTitle).toList();
    }

}
