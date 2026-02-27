package Demo;

// take question number and given question.

import java.util.Scanner;

public class QuizGiver {
    static void main(String[] args) {



        Scanner in = new  Scanner(System.in);
        System.out.print("Enter the question number : ");
        int questionNumber = in.nextInt();

        String holdResult = giveQuestion(questionNumber);
        System.out.println("Your question : \n"+holdResult);


    }
    static String giveQuestion(int target){
        String[] QuestionBank = {
                "1. Find the index of a target element in an integer array using Linear Search.",
                "2. Count how many times a target element appears in an array.",
                "3. Find the minimum element in an array using Linear Search.",
                "4. Find the maximum element in an array using Linear Search.",
                "5. Find the first and last occurrence of a target element.",
                "6. Find the second largest element in an array.",
                "7. Search for a word in a String array and return its index.",
                "8. Check whether an array is sorted in ascending order.",
                "9. Find the missing number from 1 to n+1 in an array.",
                "10. Find the duplicate element in an array using Linear Search."
        };

        for(int i=0; i<QuestionBank.length; i++){
            if(target == i+1){
                return QuestionBank[i];
            }
        }

        return "hold";
    }
}
