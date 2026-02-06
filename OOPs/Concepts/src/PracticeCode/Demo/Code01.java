package PracticeCode.Demo;

public class Code01 {
    static void main(String[] args) {
        Laptop l1 = new Laptop(1,"acer","aspire 5",123);
        Laptop l2 = new Laptop(2,"acer","aspire 6",2321);

        LaptopController cl1 = new LaptopController();
        cl1.addLaptop(l1);
        cl1.addLaptop(l2);
        cl1.displayLaptops();
        cl1.changePrice(1);
        cl1.displayLaptops();
    }
}
