package org.example;

public class Main {
    public static void main(String[] args) {
        System.out.println("--------------------------------------------------------------");
        System.out.println("let's practice");
        System.out.println("--------------------------------------------------------------");

        int[] marks = new int[]{11, 12, 34, 24, 58, 96, 57, 18, 9, 101};

        // object
        Assistant assistant = new Assistant();
//        assistant.displayArray(marks);
//        assistant.sumArray(marks);
//        assistant.reverseString("love");
//        assistant.palindrome("madam");
//        assistant.fibonacci(5);
//        assistant.factorial(5);
//        assistant.primeNumberCheck(11);
//        assistant.countVowelsAndConsonants("sharwan");
        assistant.sortArray(marks);




    }
}