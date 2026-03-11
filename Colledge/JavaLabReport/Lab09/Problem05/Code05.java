package JavaLab.Lab09.Problem05;

// Wap to illustrate the following class of java.util package
// * Vector class
// * Stack class
// * Hashtable class
// * Random class

import java.util.Vector;
import java.util.Stack;
import java.util.Hashtable;
import java.util.Random;

public class Code05 {
    public static void main(String[] args) {

        // Vector class example
        Vector<String> v = new Vector<>();
        v.add("Java");
        v.add("Python");
        v.add("C");

        System.out.println("Vector Elements: " + v);

        // Stack class example
        Stack<Integer> s = new Stack<>();
        s.push(10);
        s.push(20);
        s.push(30);

        System.out.println("Stack Elements: " + s);
        System.out.println("Popped Element: " + s.pop());

        // Hashtable class example
        Hashtable<Integer, String> h = new Hashtable<>();
        h.put(1, "Apple");
        h.put(2, "Banana");
        h.put(3, "Mango");

        System.out.println("Hashtable Elements: " + h);

        // Random class example
        Random r = new Random();
        int randomNumber = r.nextInt(100); // 0–99

        System.out.println("Random Number: " + randomNumber);
    }
}