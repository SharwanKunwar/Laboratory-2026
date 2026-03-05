package JavaLab.Lab07.Problem04;

// Write a java program to create class named shape. it should contain one methods, area() that prints are of shape.
// For this class create tow subclass Tringle and Rectangle and each class should overrider the parent class function area().
// Create object of Triangle and Rectangle to observe the polymorphic nature of class

public class code {
    public static void main(String[] args) {
        Shape s1 = new Triangle(2,4);
        s1.area();

        Shape s2 = new Rectangle(4,6);
        s2.area();
    }
}
