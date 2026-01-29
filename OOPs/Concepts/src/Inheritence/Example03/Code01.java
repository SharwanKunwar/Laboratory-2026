package Inheritence.Example03;

public class Code01 {
    static void main(String[] args) {

        //run time polimorphism
        Animal puppy = new Dog("bronge","white","domestic",1,"cross",true);
        puppy.DisplayDetails();


        Tiger t1 = new Tiger("saru","white&yellow","wild",1,"tiger");
        t1.DisplayDetails();

        Dog d1 = new Dog("mar","white","domestic",2,"hight",true);
        d1.nature();

    }
}
