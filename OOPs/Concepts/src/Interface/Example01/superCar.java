package Interface.Example01;

public class superCar implements carControls {

    @Override
    public void turnRight() {
        System.out.println("Super car turn right ");
    }

    @Override
    public void turnLeft() {
        System.out.println("Super car turn left ");
    }

    @Override
    public void applyBreaks() {
        System.out.println("super car applying breaks");
    }
}
