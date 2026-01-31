package Interface.Example02;

public class Code01 {
    static void main(String[] args) {
        Vehicle v1 = new Car("supra","mk4","white",300);
        v1.start();
        v1.turnRight();
        v1.horn();
        v1.applyBreaks();
        System.out.println("-------------------------------------------------");
        Vehicle v2 = new Bus("nisan","GTR","blue",300);
        v2.start();
        v2.turnRight();
        v2.horn();
        v2.applyBreaks();
    }
}
