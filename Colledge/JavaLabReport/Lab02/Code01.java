package JavaLab.Lab02;

public class Code01 {
    static void main(String[] args) {
        int a = 9, b = 13, c = 3;
        double x, y, z;

        // Expression (i)
        x = a - b / 3.0 + c * 2 - 1;

        // Expression (ii)
        y = a - (float)b / (3 + c) * (2 - 1);

        // Expression (iii)
        z = a - ((float)b / (3 + c) * 2 - 1);

        System.out.println("Value of x = " + x);
        System.out.println("Value of y = " + y);
        System.out.println("Value of z = " + z);
    }
}
