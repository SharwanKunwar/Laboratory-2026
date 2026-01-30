package Abstruction.Example03;

public class Code01 {
    static void main(String[] args) {
        Vehicle bike01 = new Bike();
        bike01.start();
        bike01.fuelType();
        System.out.println("----------------------------------");
        Vehicle car01 = new Car();
        car01.start();
        car01.fuelType();
    }
}
