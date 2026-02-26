package Algorithms.LinearSearch.Challenge;

//👉 Print how many times the target appears in the array
//Example:
//
//Array: {1,2,3,2,4,2}
//Target: 2
//Output: Found 3 times

import java.util.Arrays;
import java.util.Scanner;

public class challenge01 {
    public static void main(String[] args) {

        // Taking target form the user.
        Scanner in = new Scanner(System.in);
        // The array of numbers
        int [] arr = {1,2,3,2,4,2};
        System.out.print("Target: ");
        int target = in.nextInt();
        in.close();       // closing the scanner for saving resource

        // method calling
        int holdCount = countApperence(arr,target);

        // checking
        if(holdCount==0) System.out.println("Element not found");
        else System.out.println(target+" Appear "+holdCount+" Times.");


    }
    static int countApperence(int[] arr, int target) {
        // Variable to store count how many times target element appear
        int count = 0;

        // iterating through the array element so we can count how many of them are matched
        for(int i=0; i<arr.length; i++){
            if (arr[i] == target){
                count++;
            }
        }
        // then finally we return the count
        return count;
    }
}
