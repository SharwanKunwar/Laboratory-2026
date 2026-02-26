package Algorithms.LinearSearch.Challenge;

// 👉 Print the indexes where the target appears.
/*
    Array: {1,2,3,2,4,2}
    Target: 2

    Output:
    Found at index: 1
    Found at index: 3
    Found at index: 5
    Total Appearances: 3
 */

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class challenge02 {
    public static void main(String[] args) {

        //Scanner object for taking target from the user.
        Scanner in = new Scanner(System.in);

        // array of numbers
            int[] numbers = {2,9,5,6,7,8,9,9};
            System.out.println("Enter the number to be searched");
            int target = in.nextInt();
            in.close();          // closing the scanner
            // calling method
            int result = displayIndex(numbers,target);

            // checking
            if(result == 0) System.out.println("Element not found");
            else System.out.println(target+" Appear "+result+" Times.");

        System.out.println("---------------------------------------------------------------------");
        //calling displayIndexList
        int[] hold = displayIndexList(numbers,target);
        for(int val: hold){
            if(val == -1) continue;
            else System.out.println(val);
        }


    }
    static int displayIndex(int[] arr, int target){
        // variable to store count how many types element appears
        int count = 0;

        // iterating through array elements
        for(int i=0;i<arr.length;i++){
            if(arr[i]==target){
                System.out.println("Found at index: "+i);
                count++;
            }
        }
        // returning total count
        return  count;
    }
    // method for return array of indexes
    static int[] displayIndexList(int[] arr, int target){

        int[] indexList = new int[arr.length];

        // iterating through array elements
        for(int i=0;i<arr.length;i++){
            if(arr[i]==target){
                indexList[i]=i;
            }else {
                indexList[i]=-1;
            }
        }


        // returning total count
        return indexList;
    }
}
