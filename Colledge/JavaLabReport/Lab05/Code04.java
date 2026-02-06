package JavaLab.Lab05;

// Write a java program to multiply 3X3 matrix and display resultant matrix.

public class Code04 {
    static void main(String[] args) {

        System.out.println("Matrix multiply");

        int[][] matrix01 = {{1,2,3},{4,5,6},{7,8,9}};
        int[][] matrix02 = {{1,2,3},{4,5,6},{7,8,9}};

        // size
        int rowA = matrix01.length;
        int colA = matrix01[0].length;

        int rowB = matrix02.length;
        int colB = matrix02[0].length;

        int[][] hold = new int[rowA][colA];

        for(int i=0; i<rowA; i++){
            for(int j=0; j<colA; j++){
                for(int k=0; k<colB; k++){
                    hold[i][j] += matrix01[i][k] * matrix02[k][j];
                }
            }
        }

        for(int i=0; i<rowA; i++){
            for(int j=0; j<colA; j++){
                System.out.print(hold[i][j] + " ");
            }
            System.out.println();
        }

    }
}
