package JavaLab.Lab09.Problem04;

//4. Write a java program to perform autoboxing and unboxing using wrapper class.

public class Code04 {
    public static void main(String[] args) {

        // Autoboxing: converting primitive to wrapper object
        int num = 10;
        Integer obj = num;   // autoboxing

        System.out.println("Primitive value: " + num);
        System.out.println("Wrapper object (Autoboxing): " + obj);

        // Unboxing: converting wrapper object to primitive
        Integer obj2 = 20;
        int num2 = obj2;   // unboxing

        System.out.println("Wrapper object: " + obj2);
        System.out.println("Primitive value (Unboxing): " + num2);
    }
}