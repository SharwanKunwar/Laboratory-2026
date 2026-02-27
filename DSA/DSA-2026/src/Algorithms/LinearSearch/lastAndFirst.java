package Algorithms.LinearSearch;

import java.util.Scanner;

import static java.lang.System.exit;

/*
    You are given an integer array:

    int[] numbers = {12, 45, 7, 89, 45, 23, 7, 90, 45};

    Write a program using Linear Search only to:
    Find the first occurrence of 45
    Find the last occurrence of 45
    Count how many times 45 appears
    If the number is not found, return -1 for positions

 */
public class lastAndFirst {
    static void main(String[] args) {

        // Scanner object for taking input from the user.
        Scanner sc = new Scanner(System.in);

        //  Array of numbers
        int[] numbers = {12, 45, 7, 89, 45, 23, 7, 90, 45};

        // calling the method which gives first, last, and count of a frequent repeated element
        int[] hold = findLastAndFirst(numbers);

        //Printing the result
        System.out.println("First index : "+hold[0]);
        System.out.println("Last index : "+hold[1]);
        System.out.println("count : "+hold[2]);


    }
    // finding first and last appearance of most frequent element
    static int[] findLastAndFirst(int[] arr) {
        // variables for helping to hold and send data
        int first = -1;
        int last = -1;
        int count = 0;

        // checking array is empty or not if empty we don't have to check just return not found {-1,-1,0}
        if(arr.length == 0){
            return new int[]{-1,-1,0};  // empty and count is 0
        }

        // iterating array to check target element activity
        for(int i=0; i<arr.length; i++){
            // comparing array element to target element if we got then
            if(arr[i] == 45){
                // we do assign first to that index only one time coz the condition get true then next time it will not be true first is never -1
                if(first == -1){
                    // assigning index to first which hold the first appearance index of most frequent element.
                    first = i;
                }
                // in this line we update every time so that we can find the last one
                last = i;
                count++;    // and this is increasing count by 1 if array element and target element match
            }
        }
        // then finally we return first, last, and count in array
        return new  int[]{first,last,count};
    }
}
