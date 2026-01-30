package Abstruction.Example01;

public class SavingAccount extends BankAccount {
    public  SavingAccount(long accountNumber,long balance) {
        super(accountNumber,balance);
    }
    @Override
    public void interest() {
        long holdInterest = (getBalance() * 5)/100;
        System.out.println("Interest Rs "+holdInterest);
        setBalance(holdInterest);
    }
}
