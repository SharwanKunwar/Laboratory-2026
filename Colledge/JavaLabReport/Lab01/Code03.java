package JavaLab.Lab01;

public class Code03 {
    public static void main(String[] args) {
        int l = Integer.parseInt(args[0]);
        int b = Integer.parseInt(args[1]);

        int area = l*b;
        int per = 2*(l+b);

        System.out.println("Area: "+area);
        System.out.println("Perimeter: "+per);
    }
}
