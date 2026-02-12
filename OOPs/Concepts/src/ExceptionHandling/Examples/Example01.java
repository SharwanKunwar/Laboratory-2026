package ExceptionHandling.Examples;

public class Example01 {
    static void main(String[] args) throws Exception {
        Library l1 = new Library();
        Member m1 = new Member(11);
        Member person = new Member("sharwan",22);

        try{
            l1.borrowBook(11);
        }catch(BookException e){
            System.out.println(e.getMessage());
        }
        System.out.println("------------------------------------- test 1 ok -------------------------------------");

        try{
            System.out.println(m1.getName());
        }catch (invalidMemberException e){
            System.out.println(e.getMessage());
        }

        System.out.println("------------------------------------- test 2 ok -------------------------------------");

        try{
            person.setSentence("i love my fucking life and i fucking love coding.");
            System.out.println("inside try "+person.getSentence());
        }catch (BuzzWordException e){
            System.out.println(e.getMessage());
        }

        System.out.println("outside try "+person.getSentence());

        System.out.println("-------------------------------------test 3 ok -------------------------------------");





    }
}
