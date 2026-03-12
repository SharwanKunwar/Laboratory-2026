package JavaLab.Lab07.Problem03;

public class Fruit {
    String name;
    String teste;
    int size;

    public Fruit(String name,String teste, int size) {
        this.name = name;
        this.teste = teste;
        this.size = size;
    }

    public void eat(){
        System.out.println("Eating "+name+" and its teste is '"+teste+"'");
    }
}

// Apple class
class Apple extends Fruit {

    public Apple(String name, String teste, int size) {
        super(name, teste, size);
    }

    @Override
    public void eat(){
        System.out.println("Eating Apple. It tastes sweet and delicious.");
    }
}

// Orange class
class Orange extends Fruit {

    public Orange(String name, String teste, int size) {
        super(name, teste, size);
    }

    @Override
    public void eat(){
        System.out.println("Eating Orange. It tastes sour and refreshing.");
    }
}