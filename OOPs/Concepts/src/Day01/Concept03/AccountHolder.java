package Day01.Concept03;

public class AccountHolder {
    String name;
    String email;
    String dob;
    long contact;
    long totalAmount;

    AccountHolder(String name, String email, String dob, long contact, long totalAmount){
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.contact = contact;
        this.totalAmount = totalAmount;
    }

    void checkBalance(){
        System.out.println("Your Total Amount is : "+totalAmount);
    }
    void makePayment(int rs){
        if(rs <= totalAmount){
            this.totalAmount -= rs;
            System.out.println("Payment Done successfully");
            System.out.println(rs+" is Payment by "+this.name+" and remining amount is : "+totalAmount);
        }else {
            System.out.println("insificent balance");
        }


    }

}
