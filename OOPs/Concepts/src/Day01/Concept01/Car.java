package Day01.Concept01;

public class Car {
    String model;
    String name;
    String color;
    double price;
    int speed;

    Car(String model, String name, double price, int speed){
        this.model = model;
        this.name = name;
        this.price = price;
        this.speed = speed;
    }

    void drive(){
        if(speed > 100){
            System.out.println("overspeed should not greater then 100");
            this.speed = 100;
        }
        System.out.println(name+" is driving at "+speed);
    }
}
