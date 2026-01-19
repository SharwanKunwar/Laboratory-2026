package Day02.Abstriaction.Example01;



public class savingAccount extends BackAccount{

    @Override
    public void deposit() {
        System.out.println("deposit hit");
    }

    @Override
    public void withdraw() {
        System.out.println("Withdraw hit");
    }
}
