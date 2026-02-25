package Algorithms.LinearSearch;

// Linear Search
// Find target element from the given array.

public class code {

    public static void main(String[] args) {

        // Array in which we need to search the target element
        int[] numbers = {10, 22, 33, 44, 55, 66, 77, 88, 99};

        // Target element to search
        int target = 44;

        // Calling linearSearch method and storing returned index
        int hold = linearSearch(numbers, target);

        // If method returns -1, element is not found
        if (hold == -1) {
            System.out.println("Not Found");
        } else {
            // If element is found, print element and its index
            System.out.println("Element " + numbers[hold] + " found at index " + hold);
        }
    }

    static int linearSearch(int[] arr, int target) {

        // If array is empty, return -1 (element cannot be found)
        if (arr.length == 0)
            return -1;

        // Traverse the array from beginning to end
        for (int i = 0; i < arr.length; i++) {

            // Store current element at index i
            int element = arr[i];

            // Check if current element matches target
            if (element == target) {
                return i; // Return index if found
            }
        }

        // If loop completes and element not found, return -1
        return -1;
    }
}