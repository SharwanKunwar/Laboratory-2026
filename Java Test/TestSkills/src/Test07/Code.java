package Test07;
//time calculate add and subtract;

public class Code {
   public static void main(String[] args) {
        Time t1 = new Time(11,50,30);
        Time t2 = new Time(5,20,30);
        Time sum = t1.add(t2);
        Time result = t1.subtract(t2);
        sum.displayTime();
        result.displayTime();
    }
}
