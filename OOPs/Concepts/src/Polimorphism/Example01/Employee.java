package Polimorphism.Example01;

import java.util.Scanner;

public class Employee {
    long id;
    String name;
    int age;
    private double salary;
    String email;

    public Employee(long id, String name, double salary, String email, int age) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.email = email;
        this.age = age;
    }

    public void displayDetails(boolean ok){
        if(ok){
            System.out.println("Employee ID: " + id);
            System.out.println("Name: " + name);
            System.out.println("Salary: " + salary);
            System.out.println("Email: " + email);
            System.out.println("Age: " + age);
        }else{
            System.out.print("Enter your employee id: ");
            Scanner input = new Scanner(System.in);
            int id = input.nextInt();
            if(id == this.id){
                System.out.println("Employee ID: " + id);
                System.out.println("Name: " + name);
                System.out.println("Salary: " + salary);
                System.out.println("Email: " + email);
                System.out.println("Age: " + age);
            }else{
                System.out.println("wrong employee id");
            }
        }
    }

    public void displayDetails(){
        System.out.println("Employee ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
    }
}
