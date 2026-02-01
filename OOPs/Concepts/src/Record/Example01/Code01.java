package Record.Example01;

record student(String name, int age, String address){}

public class Code01 {
    static void main(String[] args) {
        student s1 = new student("sharwan",22,"bhaktapur-bode");
        System.out.println(s1.name());
        System.out.println(s1);
    }
}
