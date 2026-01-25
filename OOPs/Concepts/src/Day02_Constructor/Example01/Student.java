package Day02_Constructor.Example01;

public class Student {
    String name;
    int age;
    String address;

    public Student() {}

    public Student(String name, int age, String address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    public  void displayDetails(){
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Address: " + address);
        System.out.println("-----------------------------------------");
    }

}
