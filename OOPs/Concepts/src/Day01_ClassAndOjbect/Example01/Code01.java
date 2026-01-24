package Day01_ClassAndOjbect.Example01;

public class Code01 {
    static void main(String[] args) {
        Student student01 = new Student();
        student01.name = "sharwan";
        student01.rollNo = "12";
        student01.marks = 10;

        Student student02 = new Student();
        student02.name = "Parbesh";
        student02.rollNo = "13";
        student02.marks = 20;

        Student student03 = new Student();
        student03.name = "suman";
        student03.rollNo = "14";
        student03.marks = 30;

        student01.displayInfo();
        student02.displayInfo();
        student03.displayInfo();



    }
}
