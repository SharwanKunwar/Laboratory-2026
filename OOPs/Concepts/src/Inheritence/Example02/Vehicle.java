package Inheritence.Example02;

public class Vehicle {
    private String name;
    private String color;
    private int price;
    private String model;

    public Vehicle(String name, String color, int price, String model) {
        this.name = name;
        this.color = color;
        this.price = price;
        this.model = model;
    }


    public void ViewDetails(){
        System.out.println("Name: "+name);
        System.out.println("Color: "+color);
        System.out.println("Price: "+price);
    }
    public void start(){
        System.out.println(name+" Started");
    }
    public void stop(){
        System.out.println(name+" Stopped");
    }
    public void horn(){
        System.out.println(name+" Horned");
    }
}
