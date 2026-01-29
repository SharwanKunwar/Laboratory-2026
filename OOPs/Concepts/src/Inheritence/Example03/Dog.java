package Inheritence.Example03;

public class Dog extends Animal {
    boolean isLoving;
    public Dog(String name, String color, String type, int age, String breed, boolean isLoving) {
        super(name, color, type, age, breed);
        this.isLoving = isLoving;
    }

    @Override
    public void makeSound(){
        System.out.println("WowOwoWoWowoW");
    }
    public void nature(){
        System.out.println("isLoving : "+isLoving);
    }

}
