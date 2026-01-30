package Abstruction.Example01;

abstract public class BankAccount {
    private final long accountNumber;
    private long balance;

    public BankAccount(long accountNumber, long balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    //get balance
    public long getBalance() {
        return balance;
    }
    //set balance
    public void setBalance(long balance) {
        this.balance += balance;
    }

    // deposit method
    public void deposit(long amount) {
        this.balance += amount;
        System.out.println("deposited " + amount+" in "+this.accountNumber+" A/C");

    }

    // withdraw method
    public void withdraw(long amount) {
        this.balance -= amount;
        System.out.println("withdraw Rs " + amount+" from "+this.accountNumber+" A/C");
    }

    //check balance
    public void checkBalance() {
        System.out.println("Balance of "+this.accountNumber+" A/C is  Rs "+this.balance);
    }

    //interest method
    abstract public void interest();
}
