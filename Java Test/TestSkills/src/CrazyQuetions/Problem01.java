package CrazyQuetions;

public class Problem01 {
    static void main(String[] args) {
        // 1️⃣ Create the original 5x5 grid
        int[][] grid = {
                {1, 2, 3, 4, 5},
                {6, 7, 8, 9, 10},
                {11, 12, 13, 14, 15},
                {16, 17, 18, 19, 20},
                {21, 22, 23, 24, 25}
        };

        int n = grid.length; // Number of rows (assumes square grid)
        int[][] newGrid = new int[n][n]; // 2️⃣ Grid to store transformed values

        // 3️⃣ Print original grid
        System.out.println("Original Grid:");
        printGrid(grid);

        // 4️⃣ Transform each cell
        for (int i = 0; i < n; i++) { // Loop over rows
            for (int j = 0; j < n; j++) { // Loop over columns
                int sum = 0; // Sum of neighbors for current cell

                // Check and add UP neighbor
                if (i > 0) sum += grid[i - 1][j];

                // Check and add DOWN neighbor
                if (i < n - 1) sum += grid[i + 1][j];

                // Check and add LEFT neighbor
                if (j > 0) sum += grid[i][j - 1];

                // Check and add RIGHT neighbor
                if (j < n - 1) sum += grid[i][j + 1];

                // Assign sum to the new grid
                newGrid[i][j] = sum;
            }
        }

        // 5️⃣ Print transformed grid
        System.out.println("\nTransformed Grid (sum of neighbors):");
        printGrid(newGrid);
    }

    // Utility method to print a grid
    public static void printGrid(int[][] grid) {
        for (int[] row : grid) {
            for (int val : row) {
                System.out.printf("%4d", val); // Print each number with spacing
            }
            System.out.println(); // New line after each row
        }
    }
}
