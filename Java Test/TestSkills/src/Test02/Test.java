package Test02;

public class Test {
    static void main(String[] args) {

        Library library = new Library();

        try{
            Book b1 = new Book(-2,"English","sharwan jung kunwar");
            library.addBook(b1);
        }catch (missingIDException e){
            System.out.println(e.getMessage());
        }
        Book b2 = new Book(2,"math","mahakal");


        library.addBook(b2);

        library.displayAllBooks();

    }
}
