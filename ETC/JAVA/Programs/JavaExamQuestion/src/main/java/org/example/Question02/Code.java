package org.example.Question02;

//

public class Code {
    public static void main(String[] args) {
        Distance d1 = new Distance(2,3);
        Distance d2 = new Distance(2,12);
        Distance result = d1.add(d2);
        result.displayDistance();

        Distance sub = d1.subtract(d2);
        sub.displayDistance();
    }
}
