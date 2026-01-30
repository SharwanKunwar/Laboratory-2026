package Polimorphism.Example02;

public class Code01 {
    static void main(String[] args) {
        BankAccount b1 = new savingAccount(129011060001004L,1000);
        b1.interest();
        b1.withdraw(20);
        b1.checkBalance();
        System.out.println("_______________________________________________________________________");
        savingAccount s1 = new savingAccount(129011060001004L,100);
        s1.interest();
        s1.withdraw(20);
        s1.checkBalance();
        System.out.println(s1.getBalance());
    }
}
