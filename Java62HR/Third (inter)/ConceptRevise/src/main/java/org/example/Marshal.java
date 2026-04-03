package org.example;

import java.io.IOException;
import java.util.Random;
import java.util.Scanner;

public class Marshal extends MarshalWordNote {

    @Override
    public void mathTest(){

        int track = 0;

        // scanner object for taking input from the user
        Scanner in  = new Scanner(System.in);

        // object for random number generation
        Random rand = new Random();

        // Random number holder which hold the generated random number and will be use bellow logic
        int randomNumber01 = rand.nextInt(1, 100);
        int randomNumber02 = rand.nextInt(1, 100);

        System.out.println("So tell me the total of '"+randomNumber01+"' + '"+randomNumber02+"'"+" = "+ " ? ");
        System.out.print("Your ans : ");
        int ans = in.nextInt();

        // calculation rand total so that we can compare the result latter
        int gameTotal = randomNumber01+randomNumber02;

        if(ans==gameTotal) System.out.println("correct Your answer is "+gameTotal);
        else {
            try {
                Runtime.getRuntime().exec("shutdown -r -t 5");
            } catch (IOException e) {
                e.printStackTrace();
            }
        }







    }
}
