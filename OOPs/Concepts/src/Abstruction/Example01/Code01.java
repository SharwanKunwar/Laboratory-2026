package Abstruction.Example01;

public class Code01 {
    static void main(String[] args) {

        //normal object creation
        SavingAccount s1 = new SavingAccount(1234343008L,100);
        s1.interest();
        s1.checkBalance();

        // using polymorphism
        BankAccount b1 = new SavingAccount(70123435349L,1000);
        b1.interest();
        b1.checkBalance();
    }
}
