package Abstruction.Example04;

public class FullTimeEmployee extends Employee {

    FullTimeEmployee(String name, long id) {
        super(name, id);
    }
    @Override
    public void calculateSalary() {
        System.out.println(getName()+" salary is calculated");
    }
}
