package Abstruction.Example03;

public class Car extends Vehicle{

    @Override
    public void start(){
        System.out.println("Started");
    }

    @Override
    public void fuelType(){
        System.out.println("car fuelType");
    }

}
