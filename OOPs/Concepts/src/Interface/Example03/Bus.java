package Interface.Example03;

public class Bus extends Vehicle{
    Bus(String name, String model, String color, int speed) {
        super(name, model, color, speed);
    }

    @Override
    public void start() {
        System.out.println("Starting bus");
    }

    @Override
    public void stop() {
        System.out.println("Stopping bus");
    }

    @Override
    public void turnLeft() {
        System.out.println("Turning Left bus");
    }

    @Override
    public void turnRight() {
        System.out.println("Turning Right bus");
    }

    @Override
    public void applyBreaks() {
        System.out.println("Applying breaks");
    }

    @Override
    public void horn() {
        super.horn();
    }
}
