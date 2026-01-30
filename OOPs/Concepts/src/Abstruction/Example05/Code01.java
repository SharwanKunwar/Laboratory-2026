package Abstruction.Example05;

public class Code01 {
    static void main(String[] args) {
        Animal animal01 = new Cat();
        animal01.makeSound();
        System.out.println("-------------------------------------");
        Animal animal02 = new Dog();
        animal02.makeSound();
    }
}
