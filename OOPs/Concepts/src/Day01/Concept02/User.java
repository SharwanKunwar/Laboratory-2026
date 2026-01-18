package Day01.Concept02;

public class User {
    String name;
    String email;
    int age;
    boolean isPaymentDone = false;

    User(String name, String email, int age){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    void setReminder(){
        System.out.println("Reminder set");
    }
    void orderFood(){
        System.out.println("Food ordered");
    }
    void makePayment(){
        isPaymentDone = true;
    }
    void checkPayment(){
        if(isPaymentDone) System.out.println("Payment is done by "+this.name);
        else System.out.println("Payment is not done yet still pending!!!");
    }
}
