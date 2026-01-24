package Day01_ClassAndOjbect.Example02;

public class Code01 {
    static void main(String[] args) {
        BankAccount b1 = new BankAccount();
        b1.accountHolder = "Parbesh Rawal";
        b1.accountNumber = 112341244;
        b1.balance = 10000;

        BankAccount b2 = new BankAccount();
        b2.accountHolder = "Sharwan jung kunwar";
        b2.accountNumber = 234124;
        b2.balance = 10000;

        BankAccount b3 = new BankAccount();
        b3.accountHolder = "Roshan Dhami";
        b3.accountNumber = 31234534;
        b3.balance = 10000;

        b1.showDetails();
        b2.showDetails();
        b3.showDetails();


    }
}
