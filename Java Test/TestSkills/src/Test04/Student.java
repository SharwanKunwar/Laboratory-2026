package Test04;

public class Student extends studentController {
    private String name;
    private int rollNumber;
    private int[] marks = new int[3];
    private double percentage;

    Student(String name, int rollNumber, int[] marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }
    Student(Student CloneStudent) {
        this.name = "Clone "+CloneStudent.name;
        this.rollNumber = CloneStudent.rollNumber;
        this.marks = CloneStudent.marks;
        this.percentage = CloneStudent.percentage;
    }

    public String getName() {
        return name;
    }

    @Override
    public void calculatePercentage() {
        int sum = 0;
        for (int mark : marks) {
            sum += mark;
        }
        percentage = (sum * 100.0) / (marks.length * 100);
    }

    @Override
    public void displayInfo() {
        System.out.println("Student Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: ");
        for (int i = 0; i < marks.length; i++) {
            System.out.println(" Subject " + (i + 1) + ": " + marks[i]);
        }
        System.out.printf("Percentage: %.2f%%\n", percentage);
    }
}