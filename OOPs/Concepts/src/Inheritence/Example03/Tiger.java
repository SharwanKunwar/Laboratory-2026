package Inheritence.Example03;

public class Tiger extends Animal{

    public Tiger(String name, String color, String type, int age, String breed) {
        super(name, color, type, age, breed);
    }
    @Override
    public void makeSound() {
        System.out.println("rararsrsrarara");
    }
}
