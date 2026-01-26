package Day03_Keyword.Example01;

public class Person {
    String name;
    int age;

    public Person(){
        this("null",0);
        System.out.println("Default constructor called!");
    }

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public void displayDetails(){
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }

}
