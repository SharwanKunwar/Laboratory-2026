package Abstruction.Example02;

public class Code01 {
    static void main(String[] args) {
        Shape circle = new Circle(4);
        circle.calculateArea();
        circle.displayShape();
        System.out.println("----------------------------------");
        Shape rectangle = new Rectangle(4,4);
        rectangle.calculateArea();
        rectangle.displayShape();
    }
}
