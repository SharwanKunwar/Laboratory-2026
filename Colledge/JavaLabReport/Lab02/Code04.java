package JavaLab.Lab02;

import java.util.Scanner;

public class Code04 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int total = 0;
        float average;

        // Input marks for 5 subjects
        for(int i = 1; i <= 5; i++){
            System.out.print("Enter marks of subject " + i + ": ");
            total += sc.nextInt();
        }

        // Calculate average
        average = total / 5.0f;

        // Display results
        System.out.println("Total Marks = " + total);
        System.out.println("Average Marks = " + average);
    }
}
