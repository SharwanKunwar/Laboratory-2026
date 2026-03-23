package Random.TimeCalculation;

public class Code {
    public static void main(String[] args) {
        Time t1 = new Time(5,50,30);
        Time t2 = new Time(3,50,30);

        Time sum = t1.add(t2);
        Time diff = t1.sub(t2);

        sum.display();
        diff.display();

    }
}
