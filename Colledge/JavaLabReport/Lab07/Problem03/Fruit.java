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
        System.out.println("Eating "+name+" and it's teste is like '"+teste+"'");
    }
}

// class apple
class Apple extends Fruit {
    public Apple(String name, String teste, int size) {
        super(name, teste, size);
    }
}

// class orange
class Orange extends Fruit {
    public Orange(String name, String teste, int size) {
        super(name, teste, size);
    }
}

