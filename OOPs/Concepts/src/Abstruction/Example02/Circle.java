package Abstruction.Example02;

public class Circle extends Shape {

    int r;
    Circle(int r) {
        this.r = r;
    }
    @Override
    void calculateArea() {
        double area = 3.14 * r * r;
        System.out.println("The area of the circle is "+area);
    }

    @Override
    void displayShape() {
        System.out.println("Circle");
    }
}
