package Record.Example02;

record Bike(String name, String model, String color, int speed) {}

public class Code01 {
    static void main(String[] args) {
        Bike b1 = new Bike("ninga","H2R","green",300);
        System.out.println(b1.name());
        System.out.println(b1);
    }
}
