package Abstruction.Example04;

abstract public class Employee {
    private String name;
    private long id;

    Employee(String name, long id) {
        this.name = name;
        this.id = id;
    }
    abstract public void calculateSalary();

    public String getName() {
        return name;
    }
}
