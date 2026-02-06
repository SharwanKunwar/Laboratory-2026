package JavaLab.Lab05;

// Write a java program to find sum of array element of size n.

public class Code01 {
    static void main(String[] args) {

        int [] arr = {1,2,3,4,5,6};
        int sum = 0;

        for(int i=0; i<arr.length; i++){
            sum+=arr[i];
        }
        System.out.println("The sum is : "+sum);

    }
}
