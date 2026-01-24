package Day01_ClassAndOjbect.Example04;

public class Employee {
    String name;
    long id;
    double salary;

    public void displayEmployeeDetails() {
        System.out.println("Employee Name: " + name);
        System.out.println("Employee ID: " + id);
        System.out.println("Employee Salary: " + salary);
        System.out.println("---------------------------------");
    }
}
