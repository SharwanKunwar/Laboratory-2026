package Polimorphism.Example02;

public class savingAccount extends BankAccount{

    //Constructor
    public savingAccount(long accountNumber, long balance) {
        super(accountNumber,balance);
    }
    @Override
    public void interest(){
        long holdInterest = (getBalance() * 5)/100;
        System.out.println("Interest Rs "+holdInterest);
        setBalance(holdInterest);
    }
}
