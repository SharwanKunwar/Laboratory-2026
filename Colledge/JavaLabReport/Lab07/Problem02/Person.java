package JavaLab.Lab07.Problem02;

// multi-level inheritance

class Person {
    String name;

    Person(String name) {
        this.name = name;
    }
    void speak() {
        System.out.println("Hello World");
    }

}

class Employee extends Person {
    int salary;

    Employee(String name, int salary) {
        super(name);
        this.salary = salary;
    }
}

class Manager extends Employee {
    Manager(String name, int salary) {
        super(name, salary);
    }

    void show() {
        System.out.println(name + " " + salary);
    }
}