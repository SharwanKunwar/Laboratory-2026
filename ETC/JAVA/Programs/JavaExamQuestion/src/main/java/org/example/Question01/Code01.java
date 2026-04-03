package org.example.Question01;

/*
    What is command-line arguments?
    => Command-line arguments are inputs given to a program during execution via the command line.

    Write a program to accept two number and display their sum using command-line arguments.
*/

public class Code01 {
    public static void main(String[] args) {

        int sum = 0;

        int num01 = Integer.parseInt(args[0]);
        int num02 = Integer.parseInt(args[1]);

        sum =  num01 + num02;

        System.out.println("The sum is : " + sum);


    }
}
