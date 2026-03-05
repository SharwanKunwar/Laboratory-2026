package JavaLab.Lab07.Problem07;

// Write a java program to create user defined package and containing Employee class( Eid, Ename, Eaddress, and Salary)
// and use this package in another class or package.

import JavaLab.Lab07.Problem07.EmployeePackage.Employee;

import java.util.ArrayList;
import java.util.List;

public class code {
    public static void main(String[] args) {

        List<Employee> employees = new ArrayList<>();

        Employee e1 = new Employee(1,"sharwan","bhaktapur",12000);
        employees.add(e1);
        Employee e2 = new Employee(2,"parbesh","bhaktapur",15000);
        employees.add(e2);

        employees.forEach(System.out::println);
    }
}
