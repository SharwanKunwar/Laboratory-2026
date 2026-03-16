package JavaLab.IMP_JAVA_Questions.Time;



public class Code01 {
    public static void main(String[] args) {
        Time t1 = new Time(5, 45, 30);
        Time t2 = new Time(2, 20, 40);

        Time sum = t1.add(t2);
        Time diff = t1.subtract(t2);

        System.out.print("Added Time: ");
        sum.display();

        System.out.print("Subtracted Time: ");
        diff.display();
    }
}