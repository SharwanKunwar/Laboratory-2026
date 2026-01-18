package Day01.Concept03;

public class EMBank {
    static void main(String[] args) {
        AccountHolder XYZ = new AccountHolder("Sharwan jung kunwar","sharwankunwar07@gmail.com","2060-12-1",9814631974L,100L);
        XYZ.checkBalance();
        XYZ.makePayment(10);
        XYZ.checkBalance();

    }
}
