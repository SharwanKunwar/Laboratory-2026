package Test08;

public class Code {
    public static void main(String[] args) {
        System.out.println("Distance add and sub\n");
        Distance d1 = new Distance(2,6);
        Distance d2 = new Distance(2,11);
        Distance sum = d1.add(d2);
        Distance diff = d1.sub(d2);

        sum.display();
        diff.display();
    }
}
