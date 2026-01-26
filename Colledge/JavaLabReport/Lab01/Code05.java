package JavaLab.Lab01;

public class Code05 {
    public static void main(String[] args) {

        int p = Integer.parseInt(args[0]);
        int t = Integer.parseInt(args[1]);
        int r = Integer.parseInt(args[2]);

        double si = (double)((p*t*r)/100);
        System.out.println("Simple interest is : "+si);
    }
}
