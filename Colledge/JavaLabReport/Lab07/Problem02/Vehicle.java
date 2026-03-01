package JavaLab.Lab07.Problem02;

// Hierarchical inheritance

public class Vehicle {
    String name;
    String modal;
    String color;
    int price;

    public Vehicle(String name, String modal, String color, int price) {
        this.name = name;
        this.modal = modal;
        this.color = color;
    }
    public void start() {
        System.out.println("Starting..");
    }
    public void stop() {
        System.out.println("Stopping..");
    }

}

// car class extends vehicle
class car extends Vehicle {
    public car(String name, String modal, String color, int price) {
        super(name, modal, color, price);
    }
}

// truck class extends vehicle also
class truck extends Vehicle {
    public truck(String name, String modal, String color, int price) {
        super(name, modal, color, price);
    }
}


