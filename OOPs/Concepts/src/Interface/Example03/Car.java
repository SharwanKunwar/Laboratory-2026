package Interface.Example03;

public class Car extends Vehicle implements VehicleControler{
    Car(String name, String model, String color, int speed) {
        super(name, model, color, speed);
    }

    @Override
    public void start() {
        System.out.println("Car starting...");
    }

    @Override
    public void stop() {
        System.out.println("Car stoping...");
    }

    @Override
    public void turnLeft() {
        System.out.println("Turning Left Car");
    }

    @Override
    public void turnRight() {
        System.out.println("Turning Right Car");
    }

    @Override
    public void applyBreaks() {
        System.out.println("Applying Breaks Car");
    }

    @Override
    public void horn() {
        super.horn();
    }
}
