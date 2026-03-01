package JavaLab.Lab07.Problem02;

// Write a java program to illustrate concept of following inheritance
// a. Single-level Inheritance
// b. Multi-Level Inheritance
// c. Hierarchical Inheritance

public class code {
    public static void main(String[] args) {

        // Single-level inheritance
        student s1 = new student("Sharwan", 22);
        s1.speak();

        System.out.println("------------------------------------------------------");

        // Multi-level inheritance
        Manager m1 = new Manager("Ram", 50000);
        m1.speak();     // from Person
        m1.show();      // from Manager

        System.out.println("------------------------------------------------------");

        // Hierarchical inheritance
        car c1 = new car("Toyota", "2024", "Black", 3000000);
        c1.start();

        truck t1 = new truck("Tata", "2022", "White", 5000000);
        t1.start();


    }
}
