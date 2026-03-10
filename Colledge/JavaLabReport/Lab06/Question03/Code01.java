package JavaLab.Lab06.Question03;

// Write a class Box with private variable width, height, and depth
// and methods to find volume and surface area.
// Use suitable constructors. Implement the class to find volume and surface area of two boxes.

class Box {

    private double width;
    private double height;
    private double depth;

    // Constructor
    Box(double w, double h, double d) {
        width = w;
        height = h;
        depth = d;
    }

    // Method to calculate volume
    double volume() {
        return width * height * depth;
    }

    // Method to calculate surface area
    double surfaceArea() {
        return 2 * (width * height + height * depth + width * depth);
    }
}

public class Code01 {

    public static void main(String[] args) {

        // Creating two Box objects
        Box box1 = new Box(3, 4, 5);
        Box box2 = new Box(6, 2, 3);

        // Display results
        System.out.println("Box 1 Volume: " + box1.volume());
        System.out.println("Box 1 Surface Area: " + box1.surfaceArea());

        System.out.println("Box 2 Volume: " + box2.volume());
        System.out.println("Box 2 Surface Area: " + box2.surfaceArea());
    }
}