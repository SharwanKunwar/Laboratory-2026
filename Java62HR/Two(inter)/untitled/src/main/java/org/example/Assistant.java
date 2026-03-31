package org.example;

public class Assistant extends AssistantNoteBook {

    @Override
    public void displayArray(int[] arr) {
        for(int i = 0; i < arr.length; i++){
            System.out.print(arr[i] + " ");
        }
    }

    @Override
    public void sumArray(int[] arr){
        int sum = 0;
        for(int i = 0; i < arr.length; i++){
            sum+=arr[i];
        }
        System.out.println("\nSum of "+arr.length+" is "+sum);
    }

    @Override
    public void reverseString(String str) {

    }

    @Override
    public void palindrome(String str) {

    }

    @Override
    public void fibonacci(int n) {

    }

    @Override
    public void factorial(int n) {

    }


}
