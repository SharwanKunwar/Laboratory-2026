package Inheritence.Example02;

public class Car extends Vehicle{
    boolean isStatusOk;

    public Car(String name, String color, int price, String model, boolean isStatusOk) {
        super(name, color, price, model);
        this.isStatusOk = isStatusOk;
    }
    public void status() throws InterruptedException {
        System.out.print("Checking Car Status ");
        Thread.sleep(500);
        System.out.print(".");
        Thread.sleep(1000);
        System.out.print(".");
        Thread.sleep(700);
        System.out.print(".");
        System.out.println("\nGood to go");
    }

}
