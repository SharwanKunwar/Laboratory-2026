package Day01_ClassAndOjbect.Example02;

public class BankAccount {
    String accountHolder;
    int accountNumber;
    double balance;

    public void showDetails(){
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Balance: " + balance);
        System.out.println("---------------------");
    }
}
