package Interface.Example02;

public class Car implements Vehicle{
    String name;
    String model;
    String color;
    int speed;

    Car(String name,String model,String color,int speed){
        this.name=name;
        this.model=model;
        this.color=color;
        this.speed=speed;
    }

    @Override
    public void start() {
        System.out.println("Car start");
    }

    @Override
    public void stop() {
        System.out.println("Car stop");
    }

    @Override
    public void turnLeft() {
        System.out.println("turning car left");
    }

    @Override
    public void turnRight() {
        System.out.println("turning car right");
    }

    @Override
    public void applyBreaks() {
        System.out.println("applying car breaks");
    }


}
