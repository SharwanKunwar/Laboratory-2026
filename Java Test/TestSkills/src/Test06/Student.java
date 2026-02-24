package Test06;

//Create a Student class with fields: name (String), rollNo (int), and marks (int).
//Create an ArrayList of at least 5 students with different marks.
//Write a method to find and print the student with the highest marks.
//Write another method to sort the students by marks in descending order and print the sorted list.



public class Student {
    String name;
    int rollNo;
    int marks;

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", rollNo=" + rollNo +
                ", marks=" + marks +
                '}';
    }

    Student(String name, int rollNo, int marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }

    public int getMarks() {
        return marks;
    }
}
