package org.example.JavaNumberPrograms;

//Fibonacci Series – Sum of Even-Valued Terms

public class fibonacciSeries {
    public static void main(String[] args) {
        int a=0, b=1, next;
        int sum = 0;

        int num = 10;

        for(int i=0; i<num; i++){
            next = a+b;
            a = b;
            b = next;

            if(next%2 == 0){
                sum+=next;
            }
        }
        System.out.println(sum);
    }
}
