package JavaLab.Lab06.Question04;

class Distance {

    private int feet;
    private int inches;

    // Constructor
    Distance(int f, int i) {
        feet = f;
        inches = i;
    }

    // Method to add two distance objects
    Distance addDistance(Distance d) {

        int totalFeet = this.feet + d.feet;
        int totalInches = this.inches + d.inches;

        // Convert inches to feet if inches >= 12
        if (totalInches >= 12) {
            totalFeet += totalInches / 12;
            totalInches = totalInches % 12;
        }

        return new Distance(totalFeet, totalInches);
    }

    // Method to display distance
    void displayDistance() {
        System.out.println(feet + " feet " + inches + " inches");
    }
}

public class Code01 {

    public static void main(String[] args) {

        Distance d1 = new Distance(5, 8);
        Distance d2 = new Distance(3, 10);

        Distance result = d1.addDistance(d2);

        System.out.print("Distance 1: ");
        d1.displayDistance();

        System.out.print("Distance 2: ");
        d2.displayDistance();

        System.out.print("Total Distance: ");
        result.displayDistance();
    }
}