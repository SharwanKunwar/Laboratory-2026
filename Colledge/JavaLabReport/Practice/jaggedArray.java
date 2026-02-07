package JavaLab.Practice;

public class jaggedArray {
    static void main(String[] args) {
        int[][] jaggedArray = {{1,2},{4,6},{8,2}};

        for(int i=0; i<jaggedArray.length; i++){
            int rowSum = 0;
            System.out.print("Row "+(i+1)+": ");
            for(int j=0; j<jaggedArray[i].length; j++){
                System.out.print(jaggedArray[i][j] + " ");
                rowSum += jaggedArray[i][j];

            }
            System.out.println(" sum = "+rowSum);
        }
    }
}
