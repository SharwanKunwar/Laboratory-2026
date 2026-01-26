package JavaLab.Lab02;

public class Code02 {
    public static void main(String[] args) {
        int a = 10, b = 20;

        System.out.println("Before swapping:");
        System.out.println("a = " + a + ", b = " + b);

        // 🔹 1. Swapping using a third variable
        int temp = a;
        a = b;
        b = temp;

        System.out.println("\nAfter swapping (using third variable):");
        System.out.println("a = " + a + ", b = " + b);

        // Reset values
        a = 10;
        b = 20;

        // 🔹 2. Swapping without using a third variable
        a = a + b;
        b = a - b;
        a = a - b;

        System.out.println("\nAfter swapping (without third variable):");
        System.out.println("a = " + a + ", b = " + b);
    }
}
