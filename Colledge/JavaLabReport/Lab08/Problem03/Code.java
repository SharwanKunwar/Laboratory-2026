package JavaLab.Lab08.Problem03;

// Demonstrate string functions
// Write a program to demonstrate following string related function
// a. Character extraction function (charAt(), getChars(), toCharArray())
// b. String Comparison function (equals(), equalsIgnoreCase(), CompareTo())
// c. Modifying string function (substring(), concat(), replace())

public class Code {
    public static void main(String[] args) {

        // a. Character Extraction Functions
        String word = "Java";

        // charAt()
        System.out.println("charAt(): " + word.charAt(1));

        // getChars()
        char[] arr = new char[4];
        word.getChars(0, 4, arr, 0);
        System.out.println("getChars(): " + arr);

        // toCharArray()
        char[] chars = word.toCharArray();
        System.out.print("toCharArray(): ");
        for(char c : chars){
            System.out.print(c + " ");
        }

        System.out.println("\n");

        // b. String Comparison Functions
        String a = "Hello";
        String b = "hello";

        System.out.println("equals(): " + a.equals(b));
        System.out.println("equalsIgnoreCase(): " + a.equalsIgnoreCase(b));
        System.out.println("compareTo(): " + a.compareTo(b));

        System.out.println();

        // c. Modifying String Functions
        String text = "HelloWorld";

        System.out.println("substring(): " + text.substring(0,5));
        System.out.println("concat(): " + text.concat(" Java"));
        System.out.println("replace(): " + text.replace("World","Students"));
    }
}