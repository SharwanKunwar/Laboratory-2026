package Test07;
//time calculate add and subtract;

public class Code {
   public static void main(String[] args) {
        Time t1 = new Time(4,7,56);
        Time t2 = new Time(2,59,56);
        Time result = t1.subtract(t2);
        result.display();
    }
}
