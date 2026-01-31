package Interface.Example01;

public class ElectricCar implements carControls {
    @Override
    public void turnRight() {
        System.out.println("Electric turning right");
    }

    @Override
    public void turnLeft() {
        System.out.println("Electric turning left");
    }

    @Override
    public void applyBreaks() {
        System.out.println("Electric applying breaks");
    }
}
