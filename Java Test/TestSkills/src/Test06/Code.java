package Test06;

//Create a Student class with fields: name (String), rollNo (int), and marks (int).
//Create an ArrayList of at least 5 students with different marks.
//Write a method to find and print the student with the highest marks.
//Write another method to sort the students by marks in descending order and print the sorted list.

public class Code {
    static void main(String[] args) {
        studentManagement studentManagement = new studentManagement();

        Student s1 = new Student("Sharwan jung kunwar",22,50);
        studentManagement.addStudent(s1);

        Student s2 = new Student("Parbesh rawal",2,60);
        studentManagement.addStudent(s2);

        Student s3 = new Student("Roshan dhami",12,30);
        studentManagement.addStudent(s3);

        Student s4 = new Student("parkash shoud",32,40);
        studentManagement.addStudent(s4);

        Student s5 = new Student("Rubina kc",22,80);
        studentManagement.addStudent(s5);

        studentManagement.studentWithHighestMarks();
        studentManagement.sortStudentByMarks();




    }
}
