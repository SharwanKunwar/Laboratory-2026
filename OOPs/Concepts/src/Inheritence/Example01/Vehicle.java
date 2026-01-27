package Inheritence.Example01;

public class Vehicle {
    String name;
    String color;
    String brand;
    String model;
    final int speed = 300;
    int fuel;

    Vehicle() {}

    Vehicle(String name, String color, String brand, String model, int fuel) {
        this.name = name;
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.fuel = fuel;
    }

    public void start(){
        System.out.println(name+" started");
    }
    public void horn(){
        System.out.println(name+" horned");
    }
    public void stop(){
        System.out.println(name+" stopped");
    }

}

class Car extends Vehicle {

    public Car(String name, String color, String brand, String model, int fuel) {
        super(name, color, brand, model, fuel);
    }
}
class Bike extends Vehicle {
    public Bike(String name, String color, String brand, String model, int fuel) {
        super(name, color, brand, model, fuel);
    }
}
