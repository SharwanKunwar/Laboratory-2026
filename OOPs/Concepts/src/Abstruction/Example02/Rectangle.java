package Abstruction.Example02;

public class Rectangle extends Shape {
    int l,b;

    Rectangle(int l, int b){
        this.l = l;
        this.b = b;
    }
    @Override
    void calculateArea() {
        int hold = l*b;
        System.out.println("Area of rectangle is: " + hold);
    }

    @Override
    void displayShape() {
        System.out.println("Rectangle");
    }
}
