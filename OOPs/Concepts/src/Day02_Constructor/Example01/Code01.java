package Day02_Constructor.Example01;

public class Code01 {
    static void main(String[] args) {
     Student s1 = new Student("sharwan",22,"bhaktapur");
     Student s2 = new Student("sharwan",22,"bhaktapur");
     Student s3 = new Student("sharwan",22,"bhaktapur");
     Student s4 = new Student();

     s1.displayDetails();
     s2.displayDetails();
     s3.displayDetails();
     s4.displayDetails();

    }
}
