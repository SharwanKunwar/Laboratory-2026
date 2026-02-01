package Encapusulation.Example02;

public class Code01 {
    static void main(String[] args) {
        BankAccount b1 = new  SavingAccount();
        b1.setAccountHolderName("Jane Doe");
        b1.setAccountNumber("12345");
        b1.setBalance(10000);
        System.out.println(b1.getAccountHolderName());
    }
}
