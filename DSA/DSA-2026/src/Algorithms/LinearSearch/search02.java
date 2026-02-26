package Algorithms.LinearSearch;

// now you have to return target element itself

import java.util.Scanner;

public class search02 {
    static void main(String[] args) {

        Scanner in = new Scanner(System.in);

        int [] numbers = {2,3,4,5,6,7};
        System.out.print("Enter your target element : ");
        int target = in.nextInt();


        int holdResult = searchAndReturn(numbers,target);

        if(holdResult == -1) System.out.println("Element not found");
        else System.out.println("Element "+holdResult+" found");






    }
    static int searchAndReturn(int[] arr, int target){
        if(arr.length == 0){
            return -1;
        }
        for (int element : arr) {
            if (element == target) {
                return element;
            }
        }
        return -1;
    }
}
