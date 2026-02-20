package Test05;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;

public class Code01 {
    static void main(String[] args) {
        ArrayList<student> students = new ArrayList<>();

        int[] marks1 = {38, 53, 50, 44, 66};
        int[] marks2 = {70, 80, 90, 85, 88};
        int[] marks3 = {40, 50, 45, 60, 55};
        int[] marks4 = {50, 62, 88, 55, 91};
        int[] marks5 = {90, 95, 90, 98, 82};

        student s1 = new student("Sharwan", 1, marks1);
        student s2 = new student("Ram", 2, marks2);
        student s3 = new student("Hari", 3, marks3);
        student s4 = new student("Sita", 4, marks4);
        student s5 = new student("Gita", 5, marks5);

        students.add(s1);
        students.add(s2);
        students.add(s3);
        students.add(s4);
        students.add(s5);


        // calculate avg and grade set it to the std
        for (student s : students) {
            s.calculateAverage();
            s.findGrade();
        }


        // holding highest avg to this var
        double highestAvg = students.get(0).getAverage();


        // now checking if highest > std avg then make it highestAvg = std AVg
        for (student s : students) {
            if (s.getAverage() > highestAvg) {
                highestAvg = s.getAverage();
            }
        }

        // finding student by giving calculated highest avg among std
        for (student s : students) {
            s.findStudent(highestAvg);
        }
    }
}
