package Collections.Map.Example01;

import java.util.HashMap;
import java.util.Map;

public class Code01 {
    static void main(String[] args) {

        Map<Integer, String> users = new HashMap<>();
        users.put(1, "John");
        users.put(2, "Jane");
        users.put(3, "Jack");

        for(Map.Entry<Integer, String> user : users.entrySet()){
            System.out.println(user.getKey() + ": " + user.getValue());
        }
    }
}
