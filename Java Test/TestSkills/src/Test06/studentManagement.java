package Test06;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Optional;

public class studentManagement {

    ArrayList<Student> students = new ArrayList<>();

    public void addStudent(Student student){
        students.add(student);
    }

    public void studentWithHighestMarks(){
        Optional<Student> topStudent = students.stream().max(Comparator.comparing(n->n.marks));
        topStudent.ifPresent(student -> System.out.println("Top Student: " + student));
    }
    public void sortStudentByMarks(){
        students.sort(Comparator.comparing(Student::getMarks).reversed());
        students.forEach(System.out::println);
    }
}
