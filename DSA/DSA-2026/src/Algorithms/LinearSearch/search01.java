package Algorithms.LinearSearch;

// you have an array of numbers you have to find target element by using linear search

import java.util.Scanner;

public class search01 {
    static void main(String[] args) {

        //Scanner to takin target element from the user.
        Scanner in = new Scanner(System.in);

        // The given array.
        int[] numbers = {1,2,3,4,5,6,7};
        System.out.print("Enter the number to be searched: ");
        int target = in.nextInt();
        // method call for checking target is exist or not
        int holdResult = search(numbers, target);

        // checking the condition for result found or not
        if(holdResult == -1){
            System.out.println("Not found");
            return;
        }
        System.out.println("Element "+numbers[holdResult]+" found At index : "+holdResult);



    }
    //method
    static int search(int[] numbers, int target) {
        // checking if the array length is == 0 that means target is not exist
        if(numbers.length == 0){
            return -1;
        }
        // for loop for find target element
        for(int i=0; i<numbers.length; i++){
            int element = numbers[i];
            if(element == target){
                return i;          // returning index of the target element
            }
        }
        // if all of them are false then this will return
        return -1;
    }
}


// return Integer.MAX_VALUE if you are returning element itself coz there should -1 in the array
// but if you are returning index of target element then no problem you can go with this -1 