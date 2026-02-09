package Collections.Set.Example01;

import java.util.HashSet;
import java.util.Set;

public class Code01 {
    static void main(String[] args) {

        Set<String> names = new HashSet<>();
        names.add("John");
        names.add("sharwan");
        names.add("parbesh");


        // for each
        for(String name : names){
            System.out.println(name);
        }


    }
}
