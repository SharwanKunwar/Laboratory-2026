package Algorithms.LinearSearch;

/*
    🔥 Challenge: Find Third-Largest Element (Linear Search Only)

    🔹 Problem:
        You are given an integer array:
        int[] numbers = {12, 45, 7, 89, 45, 23, 90, 7, 88};

    🎯 Tasks:
        * Find the largest element
        * Find the second-largest element
        * Find the third-largest element
        * If the third largest does not exist → return -1

    ⚠️ Rules:
        ✔ Only loops and conditions
        ✔ Single traversal preferred (O(n))
        ❌ No sorting
        ❌ No built-in functions
        ❌ No Collections
*/

public class thirdLargestElement {
    public static void main(String[] args) {

        // Sample array of numbers
        int[] numbers = {12, 45, 7, 89, 45, 23, 90, 7, 88};

        // Call method to find largest, second-largest, and third-largest
        int[] result = threeLargest(numbers);

        // Print results
        System.out.println("Largest → " + result[0]);
        System.out.println("Second Largest → " + result[1]);
        System.out.println("Third Largest → " + result[2]);
    }

    static int[] threeLargest(int[] numbers) {

        // Initialize variables to hold largest, second largest, and third largest
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;
        int thirdLargest = Integer.MIN_VALUE;

        // If array has less than 3 elements, third largest does not exist
        if(numbers.length < 3){
            return new int[]{-1, -1, -1};
        }

        // Traverse the array to find three largest elements
        for(int i = 0; i < numbers.length; i++){

            if(numbers[i] > largest){
                // Shift previous largest and second largest down
                thirdLargest = secondLargest;
                secondLargest = largest;
                largest = numbers[i];

            } else if(numbers[i] > secondLargest && numbers[i] != largest){
                // Shift previous second largest to third
                thirdLargest = secondLargest;
                secondLargest = numbers[i];

            } else if(numbers[i] > thirdLargest && numbers[i] != largest && numbers[i] != secondLargest){
                // Update third largest
                thirdLargest = numbers[i];
            }
        }

        // If third largest was never updated, set it to -1
        if(thirdLargest == Integer.MIN_VALUE){
            thirdLargest = -1;
        }

        return new int[]{largest, secondLargest, thirdLargest};
    }
}