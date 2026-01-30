package Abstruction.Example03;

public class Bike extends Vehicle{

    @Override
    public void start() {
        System.out.println("Bike start");
    }
    @Override
    public void fuelType() {
        System.out.println("Bike fuelType");
    }
}
