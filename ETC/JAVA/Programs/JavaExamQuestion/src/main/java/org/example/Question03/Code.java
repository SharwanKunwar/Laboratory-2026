package org.example.Question03;

public class Code {
    public static void main(String[] args) {
        Time t1 = new Time(5,10,6);
        Time t2 = new Time(5,30,3);
        Time add = t1.add(t2);
        add.displayTime();
    }
}
