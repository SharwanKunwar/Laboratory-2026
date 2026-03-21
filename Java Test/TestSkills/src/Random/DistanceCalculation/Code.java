package Random.DistanceCalculation;

public class Code {
    public static void main(String[] args) {
        Distance d1 = new Distance(5,5);
        Distance d2 = new Distance(5,9);

        Distance sum = d1.add(d2);
        Distance diff = d1.sub(d2);
        sum.displayDistance();
        System.out.println("--------------------------------");
        diff.displayDistance();
    }
}
