package Project.LIB;

import java.util.*;

public class Library {

    List<Book> bookList = new ArrayList<>();

    //Add method
    void addBook(Book book) {
        bookList.add(book);
    }

    void deleteBook(int id) {
        Iterator<Book> iterator = bookList.iterator();
        boolean found = false;


        while (iterator.hasNext()) {
            Book book = iterator.next();

            if(book.status.equals("Not available")) {
                if(book.getId() == id) {
                    System.out.println("Book '"+book.getName()+"' is not available it is\nIssued to '"+book.getIssuedTo()+"'");
                    return;
                }
            }
            if (book.getId() == id) {
                System.out.println("Name: " + book.getName());
                System.out.println("Author: " + book.getAuthor());
                System.out.println("Category: " + book.getCategory());
                System.out.println("Status: " + book.status);
                System.out.println("Pages: " + book.getPages());
                System.out.println("Price: " + book.getPrice());

                iterator.remove(); // ✅ DELETE HERE
                found = true;
                System.out.println("Book Deleted Successfully");
                break;
            }
        }

        if (!found) {
            System.out.println("Book not found!");
        }
    }



    //Update book
    void updateBook(Book book) {
        System.out.println("updating book");
    }

    //Issue book
    void issueBook(int id) {
        boolean found = false;
        Scanner input = new Scanner(System.in);
        for(Book book : bookList) {
            if(book.status.equals("Available")) {
                if (book.getId() == id) {
                    book.status = "Not available";
                    System.out.print("Issue to whom : ");
                    String issueTo = input.nextLine();
                    book.setIssuedTo(issueTo);
                    found = true;
                    break;
                }

            }else {
                if(book.getId() == id) {
                    System.out.println("Book is already issued to "+book.getIssuedTo());
                    return;
                }

            }

        }
        // check found or not
        if (found) {
            for(Book book : bookList) {
                if(book.getId() == id) {
                    System.out.println("\nBook "+book.getName()+"\nIssued to "+book.getIssuedTo());
                    return;
                }

            }
        }else{

            System.out.println("Book ID: " + id+ " is not found");
        }
    }

    //return book
    void returnBook(int id) {
        boolean found = false;
        for(Book book : bookList) {
            if (book.getId() == id) {
                book.status = "Available";
                found = true;
            }
        }
        // check found or not
        if (found) {
            for(Book book : bookList) {
                if(book.getId() == id && book.status.equals("Available")){
                    System.out.println("\nBook "+book.getName()+"\nReturned by "+book.getIssuedTo());
                    if(Objects.equals(book.status, "Available")){
                        book.setIssuedTo("none");
                    }
                    return;
                }else {
                    if(book.getId() == id){
                        if(book.status.equals("Not available")){
                            System.out.println("\nBook "+book.getName()+"\nis not issued to anyone");
                            return;
                        }


                    }
                }

            }
        }else{
            System.out.println("Book ID: " + id+ " is not found");
        }
    }


    void displayBooks() {
        int count = 0;
        for(Book book : bookList){
            count++;
            System.out.println("\n----------------- Book count "+count+" ---");
            System.out.println("Book ID: "+book.getId());
            System.out.println("Name: "+book.getName());
            System.out.println("Author: "+book.getAuthor());
            System.out.println("Category: "+book.getCategory());
            System.out.println("Status: "+book.status);
            System.out.println("IssuedTo: "+book.getIssuedTo());
            System.out.println("Pages: "+book.getPages());
            System.out.println("Price: "+book.getPrice());
            if(Objects.equals(book.status, "Available")){
                book.setIssuedTo("none");
            }
        }
    }
}
