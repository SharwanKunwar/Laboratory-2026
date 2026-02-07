package JavaLab.Lab05;

// Write a java program to declare and initialize jagged array
// and display the jagged array with sum of individual row.

public class Code05 {
    public static void main(String[] args) {

        // Declare and initialize jagged array
        int[][] jaggedArray = {
                {1, 2, 3},
                {4, 5},
                {6, 7, 8, 9}
        };

        // Display jagged array and sum of each row
        for (int i = 0; i < jaggedArray.length; i++) {
            int rowSum = 0;
            System.out.print("Row " + (i + 1) + ": ");

            for (int j = 0; j < jaggedArray[i].length; j++) {
                System.out.print(jaggedArray[i][j] + " ");
                rowSum += jaggedArray[i][j];
            }

            System.out.println(" | Sum = " + rowSum);
        }
    }
}
