package Inheritence.Example03;

public class Animal {
    String name;
    String color;
    String type;
    int age;
    String breed;

    public Animal(String name, String color, String type, int age, String breed) {
        this.name = name;
        this.color = color;
        this.type = type;
        this.age = age;
        this.breed = breed;
    }
    
    public void DisplayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Color: " + color);
        System.out.println("Type: " + type);
        System.out.println("Age: " + age);
        System.out.println("Breed: " + breed);
        System.out.println("-----------------------------------------------------");
    }
    public void eat(){
        System.out.println(name+" Eating");
    }
    public void sleep(){
        System.out.println(name+" Sleeping");
    }
    public void makeSound(){
        System.out.println(name+" Making Sound");
    }
}
