package JavaLab.Lab05;

// Write a java program to find minimum and maximum element from 1-D array of size n.

public class Code02 {
    static void main(String[] args) {
        int [] arr = {12,3,4,5};
        int max = arr[0];
        int min = arr[0];

        for(int i=0; i<arr.length; i++){
            if(arr[i]>max){
                max = arr[i];
            }else if(arr[i]<min){
                min = arr[i];
            }
        }
        System.out.println("Min : "+min);
        System.out.println("Max : "+max);
    }
}
