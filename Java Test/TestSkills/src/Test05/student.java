package Test05;

public class student extends studentController {
    private String name;
    private int rollNumber;
    private int[] marks;
    private double average;
    private char grade;

    // Constructor
    student(String name, int rollNumber, int[] marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }


    // this will return avg
    public double getAverage() {
        return average;
    }
    // for grade
    public char getGrade() {
        return grade;
    }

    // method for cal avg
    @Override
    public void calculateAverage() {
        int sum = 0;
        for (int mark : marks) {
            sum += mark;
        }
        average = sum * 1.0 / marks.length;
    }

    // method for find grade
    @Override
    public void findGrade() {
        if (average >= 90) {
            grade = 'A';
        } else if (average >= 80) {
            grade = 'B';
        } else if (average >= 70) {
            grade = 'C';
        } else if (average >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }
    }

    @Override
    public void displayReport() {
        System.out.println("Student Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("\n-------------------- Marks");
        for (int i = 0; i < marks.length; i++) {
            System.out.println(" Subject " + (i + 1) + ": " + marks[i]);
        }
        System.out.println("-------------------- Grade and AVG ---" );
        System.out.printf("Average: %.2f\n", average);
        System.out.println("Grade: " + grade);
    }

    @Override
    public void findStudent(double avg) {

        if (Math.abs(this.average - avg) < 0.0001) {
            System.out.println("----- Student Found -----\n");
            displayReport();
        }
    }
}