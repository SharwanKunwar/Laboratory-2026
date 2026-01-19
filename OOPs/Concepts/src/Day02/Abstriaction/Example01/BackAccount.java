package Day02.Abstriaction.Example01;

abstract public class BackAccount {
    private String accountNumber;
    private double balance;

    public abstract void deposit();
    public abstract void withdraw();
}
