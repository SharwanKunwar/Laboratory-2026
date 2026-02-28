package Algorithms.LinearSearch.Challenge;

/*
    🔹 Problem: Find Second-Largest Element (Using Linear Search Only)

        You are given an integer array:

        int[] numbers = {12, 45, 7, 89, 45, 23, 90, 7, 88};

        🎯 Tasks:
        1. Find the largest element
        2. Find the second-largest element
        3. If the second largest does not exist (all elements same), return -1

        Constraints:
        ✔ Only loops and conditions
        ❌ No sorting
        ❌ No built-in functions
        ❌ No Collections
*/

public class secondLargestElement {
    public static void main(String[] args) {

        // Sample arrays for testing
        int[] numbers = {12, 45, 7, 89, 45, 23, 90, 7, 88};
        int[] numbers01 = {4, 4, 4, 4, 4, 4, 4};

        // Call method to find largest and second-largest
        int[] holdResult = secondLargestElement(numbers);

        // Check results and print
        if(holdResult[0] == Integer.MIN_VALUE || holdResult[1] == -1){
            System.out.println("No second largest element found");
        } else {
            System.out.println("Largest element: " + holdResult[0]);
            System.out.println("Second largest element: " + holdResult[1]);
        }
    }

    /**
     * Method to find the largest and second-largest element in an array
     * @param numbers array of integers
     * @return int[] where index 0 = largest, index 1 = second largest (or -1 if not found)
     */
    static int[] secondLargestElement(int[] numbers) {

        // Initialize largest and second-largest
        int Largest = Integer.MIN_VALUE;
        int secondLargest = -1;

        // Return [-1, -1] if array is empty
        if(numbers.length == 0){
            return new int[]{-1, -1};
        }

        // Traverse the array once to find both largest and second-largest
        for(int i = 0; i < numbers.length; i++){
            if(numbers[i] > Largest){
                // Shift old largest to secondLargest before updating largest
                secondLargest = Largest;
                Largest = numbers[i];
            }
            else if(numbers[i] > secondLargest && numbers[i] != Largest){
                // Update secondLargest if current number is smaller than largest but bigger than secondLargest
                secondLargest = numbers[i];
            }
        }

        // Return result
        return new int[]{Largest, secondLargest};
    }
}