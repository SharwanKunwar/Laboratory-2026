package JavaLab.Lab06.Question02;

public class Student {
    String name;
    String address;
    int roll;

    public Student(){}
    public Student(String name, String address, int roll) {
        this.name = name;
        this.address = address;
        this.roll = roll;
    }
    public void display(){
        System.out.println("Name: " + name);
        System.out.println("Address: " + address);
        System.out.println("Roll: " + roll);
    }
}
