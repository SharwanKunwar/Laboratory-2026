package Collections.List.DemoProgram;

import java.util.ArrayList;
import java.util.List;

public class Code02 {
    static void main(String[] args) {
        List<String> myFriends = new ArrayList<>();
        myFriends.add("Ashika");
        myFriends.add("Bikash");
        myFriends.add("Cyan");
        myFriends.add("Daniel");


        for(String item : myFriends){
            System.out.println(item);
        }
    }
}
