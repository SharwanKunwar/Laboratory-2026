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
        // to reverse we use stringBuilder also there are any way to do this
        StringBuilder stringBuilder = new StringBuilder();
        for(int i= str.length()-1; i>=0; i--){
            stringBuilder.append(str.charAt(i));
        }
        System.out.println("\nReverse String is "+stringBuilder);
    }

    @Override
    public void palindrome(String str01) {
        String org = str01;
        StringBuilder reversed01 = new StringBuilder();
        for(int i=str01.length()-1; i>=0; i--){
            reversed01.append(str01.charAt(i));
        }
        if(org.contains(reversed01)) System.out.println("Palindrome is "+org);
        else System.out.println("Palindrome is not "+org);
    }

    @Override
    public void fibonacci(int n) {
        int first = 0;
        int second = 1;
        int next;

        for(int i=1; i<=n; i++){
            next = first + second;
            first = second;
            second = next;
            System.out.println(first);
        }

    }

    @Override
    public void factorial(int n) {
        int fact=1;

        for(int i=1; i<=n; i++){
            fact *= i;
        }
        System.out.println("Factorial is "+fact);
    }


}
