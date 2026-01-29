package Polimorphism.Example01;

public class sharwan extends Employee {


    public sharwan(long id, String name, double salary, String email, int age) {
        super(id, name, salary, email, age);
    }

    @Override
    public void displayDetails(){
        System.out.println("Name: " + name);
    }
}
