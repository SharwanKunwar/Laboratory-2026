package JavaLab.Lab07.Problem03;

// Create a base class Fruit which has name, teste and size as its attributes.
// A method called eat() is created which describes the name of the fruit and its teste. Inherit the same in 2 other
// class Apple and Orange and override the eat() method to represent each fruit teste.

public class code {
    public static void main(String[] args) {

        Apple a = new Apple("Apple", "Sweet", 5);
        Orange o = new Orange("Orange", "Sour", 4);

        a.eat();
        o.eat();
    }
}
