package Abstruction.Example01;

public class KidsAccount extends BankAccount {

    //constructor
    public KidsAccount(long accountNumber, long balance) {
        super(accountNumber, balance);
    }

    @Override
    public void interest() {
        long holdInterest = (getBalance() * 10)/100;
        System.out.println("Interest Rs "+holdInterest+" from kids account");
        setBalance(holdInterest);
    }
}
