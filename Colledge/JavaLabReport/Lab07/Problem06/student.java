package JavaLab.Lab07.Problem06;

public class student extends studentController{
    String name;
    int age;

    @Override
    void walk() {
        System.out.println("Normal walking..");
    }

    @Override
    void study() {
        System.out.println("studying with books and videos");
    }

    @Override
    void speak() {
        System.out.println("speaking in English");
    }
}
