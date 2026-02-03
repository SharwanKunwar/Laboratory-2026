package Collections.List.Example01;

import java.util.ArrayList;
import java.util.List;

public class Code01 {
    static void main(String[] args) {
        List<Integer> age = new ArrayList<>();
        age.add(1);
        age.add(2);
        age.add(3);

        for(int val: age){
            System.out.println(val);
        }
    }
}
