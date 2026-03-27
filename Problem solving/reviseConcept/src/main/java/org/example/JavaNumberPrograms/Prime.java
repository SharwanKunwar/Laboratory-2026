package org.example.JavaNumberPrograms;

public class Prime {
    public static void main(String[] args) {
        int num = 7;
        boolean flag = true;

        if(num<1) return;

        for(int i=2; i*i<=num; i++){
            if(num%2 == 0){
                flag = false;
            }

        }

        if(flag) System.out.println("Prime Number");
        else System.out.println("Not Prime Number");
    }

}
