package Interface.Example02;

public class Bus extends Car implements Vehicle{

    Bus(String name, String model, String color, int speed) {
        super(name, model, color, speed);
    }

    @Override
    public void start() {
        System.out.println("Bus start");
    }

    @Override
    public void stop() {
        System.out.println("Bus stop");
    }

    @Override
    public void turnLeft() {
        System.out.println("Bus turn left");
    }

    @Override
    public void turnRight() {
        System.out.println("Bus turn right");
    }
}
