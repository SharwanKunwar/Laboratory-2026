package Algorithms.LinearSearch.Challenge;

/*
    Problem: Find First and Last Occurrence (Linear Search)
        You are given an integer array and a target value.
        Your task is to:
            1. Find the first occurrence of the target element.
            2. Find the last occurrence of the target element.
            3. If the target is not found, return -1 for both.
            You must solve this using Linear Search only (no binary search, no built-in methods).


            Input:
                arr = {2, 9, 5, 6, 7, 8, 9, 9}
                target = 9

                Output:
                First Occurrence: 1
                Last Occurrence: 7
 */

import java.util.Scanner;

public class challenger03 {
    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        int [] numbers = {2, 9, 5, 6, 7, 8, 9, 9};
        System.out.println("Enter the number to be searched: ");
        int target = in.nextInt();
        int[] result = ArrayOfIndex(numbers,target);

        if(result == null){
            System.out.println("Element not found");
            return;
        }


        for(int val : result){
            System.out.print(val+" ");
        }

    }
    static int[] ArrayOfIndex(int[] arr, int target){
        int firstIndex = -1;
        int secondIndex = -1;

        for(int i=0; i<arr.length; i++){
            if(arr[i]==target){
                if(firstIndex==-1){
                    firstIndex = i;
                }
                secondIndex = i;
            }
        }
        if(firstIndex==-1){
            return null;
        }
        return new int[]{firstIndex,secondIndex};
    }
}
