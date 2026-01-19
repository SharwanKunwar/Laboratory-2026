package Day01.Concept04;

public class Vehicle {
    String name;
    String model;
    String color;
    final int topSpeed = 300;
    long price;

    public Vehicle(String name, String model, String color, long price) {
        this.name = name;
        this.model = model;
        this.color = color;
        this.price = price;
    }

    void start(){
        System.out.println(name+" is started");
    }
    void drive(int speed){
        if(speed > topSpeed){
            speed = topSpeed;
            System.out.println("speed is max");
        }
        System.out.println(name+" driving at "+speed+"km/s");
    }


    public void displayDetails(){
        System.out.println("Name: "+name+" "+model);
        System.out.println("Color: "+color);
        System.out.println("Price: "+price);
    }

}

class Car extends Vehicle{

    public Car(String name, String model, String color, long price) {
        super(name, model, color, price);
    }
}

class Bike extends Vehicle{

    public Bike(String name, String model, String color, long price) {
        super(name, model, color, price);
    }

    @Override
    void drive(int speed) {
        if(speed > topSpeed){
            speed = topSpeed;
            System.out.println("over speed ride safe");
        }
        System.out.println(name+" is riding at "+speed+"km/s");
    }
}