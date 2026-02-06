package PracticeCode.Demo;

import java.util.ArrayList;
import java.util.List;

public class LaptopController {
    List<Laptop> laptops = new ArrayList<Laptop>();

    void addLaptop(Laptop laptop) {
        laptops.add(laptop);
    }
    void displayLaptops() {
        for (Laptop laptop : laptops) {
            System.out.println(laptop.getId());
            System.out.println(laptop.getName());
            System.out.println(laptop.getModel());
            System.out.println(laptop.getPrice());
        }
    }

    void changePrice(int id) {
        for (Laptop laptop : laptops) {
            if (laptop.getId() == id) {
                laptop.setPrice(777);
            }
        }
    }
}
