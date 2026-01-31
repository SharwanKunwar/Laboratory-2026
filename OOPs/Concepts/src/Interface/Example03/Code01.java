package Interface.Example03;

public class Code01 {
    public static void main(String[] args) {
        Vehicle v1 = new Car("supra","mk4","whtie",200);
        v1.start();
        v1.stop();
        v1.turnLeft();
        v1.horn();
        v1.turnRight();
        System.out.println("------------------------------------------------");
        Vehicle v2 = new Bus("toyata","gk","yellow",100);
        v2.start();
        v2.stop();
    }
}
