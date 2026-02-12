package ExceptionHandling.Examples;

public class Library {
    int availableBooks=5;

    public void borrowBook(int bookRequestCount) throws Exception {
        Member m1 = new Member("sharwan",11);
        if(bookRequestCount > availableBooks) {
//            throw new Exception("Book Request Count Exceeded");
            throw new BookException("Book Request Count Exceeded",null);
        }
        if(bookRequestCount <= 0) {
//            throw new Exception("There is no book");
            throw new BookException("There is no book",m1.getName());
        }
        System.out.println("happy books");
    }


}
