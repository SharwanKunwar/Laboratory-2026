package Example01;

// Definition of a Human.
// Just name and age. Dreams and purpose not included.
public class Human {
    String name;
    int age;

    // Method to set age.
    // Notice how we pass the same object (h1) to itself.
    // It's like asking someone to confirm their own existence.
//    public void setAge(int age, Human h1) {
//        h1.age = age; // Assigning age… because time waits for no one.
//    }

    // how we do with this keyword
    public void setAge(int age) {
        this.age = age;
    }

    // The human speaks.
    // Clearly going through something.
    public void speak(){
        System.out.println("Fuck...");
    }

    // Displays basic identity.
    // Name and age — society’s favorite labels.
    public void display(){
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}