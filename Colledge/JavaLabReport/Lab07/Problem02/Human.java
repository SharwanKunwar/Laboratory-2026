package JavaLab.Lab07.Problem02;

//single level inheritance

public class Human {
    String name;
    int age;

    public Human(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public void speak(){
        System.out.println("Hello !!");
    }
}

// student class
class student extends Human {
    student(String name, int age) {
        super(name,age);
    }
}

