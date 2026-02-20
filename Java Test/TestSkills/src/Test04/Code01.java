package Test04;

public class Code01 {
    static void main(String[] args) {
        int [] marks = {40,40,40};
        Student s1 = new Student("Sharwan",22,marks);
        s1.calculatePercentage();

        s1.displayInfo();

        System.out.println("-------------------- student clone data ---");

        Student GG = new Student(s1);
        GG.displayInfo();
    }
}
