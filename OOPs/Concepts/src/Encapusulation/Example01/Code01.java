package Encapusulation.Example01;

public class Code01 {
    static void main(String[] args) {
        Book b1  = new Book("no name","sharwan",1000);

        System.out.println(b1.getAuthor());
        System.out.println(b1.getTitle());
    }
}
