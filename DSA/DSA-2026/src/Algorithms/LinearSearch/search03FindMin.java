package Algorithms.LinearSearch;

public class search03FindMin {
    static void main(String[] args) {

        int[] num = {19,22,33,14,95,6,-30};
        int holdResult = findMin(num);
        System.out.println("The Minium element is : "+holdResult);

    }
    static int findMin(int[] arr){
        int min = arr[0];

        for(int val: arr){
            if(val < min){
                min = val;
            }
        }
        return min;
    }
}
