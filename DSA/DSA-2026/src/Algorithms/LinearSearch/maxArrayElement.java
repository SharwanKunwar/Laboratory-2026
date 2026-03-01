package Algorithms.LinearSearch;

// Find the maximum element in a multidimensional (2D) array

public class maxArrayElement {
    public static void main(String[] args) {

        // Define a 2D array (multidimensional array)
        int[][] numbers = {
                {1, 2, 3, 4, 5},
                {12, 23, 43, 54, 66},
                {10, 20, 30}
        };

        // Call the method to find the maximum element
        int maxElement = maxElement(numbers);

        // Print the maximum element
        System.out.println("Maximum element in the array: " + maxElement);
    }

    /**
     * Method to find the maximum element in a 2D array
     * @param arr - 2D integer array
     * @return maximum integer value present in the array
     */
    static int maxElement(int[][] arr) {

        // Initialize max with the smallest possible integer
        int max = Integer.MIN_VALUE;

        // Loop through each row of the 2D array
        for (int i = 0; i < arr.length; i++) {
            // Loop through each element in the current row
            for (int j = 0; j < arr[i].length; j++) {
                // If the current element is greater than max, update max
                if (arr[i][j] > max) {
                    max = arr[i][j];
                }
            }
        }

        // Return the maximum value found
        return max;
    }
}