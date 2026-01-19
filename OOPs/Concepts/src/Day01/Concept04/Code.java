package Day01.Concept04;

public class Code {
    static void main(String[] args) {
        Vehicle bike01 = new Bike("ninja","H2R","green",10000000L);
        bike01.drive(400);

        Vehicle car01 = new Car("Supra","MK4","White",10000000L);
        car01.drive(500);
    }
}
