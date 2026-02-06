package JavaLab.Lab05;

// Write a java program to sort array element in ascending order.

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

public class Code03 {
    static void main(String[] args) {
        Integer [] arr = {1,4,3,2,5};

        // before sort
        for(int val: arr){
            System.out.print(val+" ");
        }

        // built in ascending sort
        Arrays.sort(arr);

        // sorting logic
        for(int i=0; i<arr.length-1; i++){
            for(int j = 0; j<arr.length-1-i; j++){
                if(arr[j]>arr[j+1]){ // accending ordre
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }

        System.out.println();

        //after sort
        for(int val: arr){
            System.out.print(val+" ");
        }


    }
}

// built in descending sort
//        Arrays.sort(arr,Collections.reverseOrder());
