package Interface.Example03;

abstract public class Vehicle implements VehicleControler{
    String name;
    String model;
    String color;
    int speed;

    Vehicle(String name, String model, String color, int speed) {
        this.name = name;
        this.model = model;
        this.color = color;
        this.speed = speed;
    }




}
