package JavaLab.Lab06.Question01;

public class Circle {
    private float radius;

    public Circle(float radius) {
        this.radius = radius;
    }

    public double findArea() {
        return Math.PI * radius * radius;
    }

    public double findCircumference() {
        return 2 * Math.PI * radius;
    }
}
