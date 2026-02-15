package MethodReference.Example01;

import java.util.Arrays;
import java.util.List;
import java.util.function.Consumer;

public class Code01 {
    static void main(String[] args) {

        List<String> names = Arrays.asList("Sharwan jung kunwar", "Parbesh Rawal", "Roshan Dhami", "Sita");

        // Printing names using for loop method 01
        for(int i=0; i<names.size(); i++){
            System.out.println(names.get(i));
        }

        System.out.println("-----------------------------------------");
        // Method 02 for each / enhance for
        for(String name : names){
            System.out.println(name);
        }

        System.out.println("-----------------------------------------");
        // Method 03 for
        names.forEach(new  Consumer<String>() {
            @Override
            public void accept(String name) {
                System.out.println(name);
            }
        });

        System.out.println("-----------------------------------------");
        // Method 04 lamda
        names.forEach((name) -> {
            System.out.println(name);
        });

        System.out.println("-----------------------------------------");
        // Method 05 lamda shorter
        names.forEach((name)-> System.out.println(name));

        System.out.println("-----------------------------------------");
        // Method 06 lamda shorter
        names.forEach(System.out::println);
    }
}
