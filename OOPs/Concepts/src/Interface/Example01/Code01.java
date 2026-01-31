package Interface.Example01;

public class Code01 {
    static void main(String[] args) {

        carControls c1 = new ElectricCar();
        c1.turnRight();
        c1.applyBreaks();
        System.out.println("-----------------------------");
        carControls c2 = new superCar();
        c2.turnLeft();
        c2.applyBreaks();

    }
}
