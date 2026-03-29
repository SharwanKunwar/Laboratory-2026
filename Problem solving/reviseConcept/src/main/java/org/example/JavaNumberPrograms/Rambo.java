package org.example.JavaNumberPrograms;

import javazoom.jl.player.Player;
import java.io.FileInputStream;
import java.io.IOException;
import java.time.Duration;
import java.util.Random;
import java.util.Scanner;

// This Rambo class is supposed to solve number problems and other things also.
// Honestly, overkill. It's Fibonacci, not a battlefield right gg.
public class Rambo extends RamboCanDo {

    @Override
    public void processFibonacci(int num) {

        // First two Fibonacci numbers.
        // Like the only stable relationship in this code.
        int first = 0;
        int second = 1;

        // This will hold the next number in the sequence.
        int next;

        // Loop runs from 1 to num (inclusive).
        for (int i = 1; i <= num; i++) {

            // Calculate next Fibonacci number
            next = first + second;

            // Shift values forward
            first = second;
            second = next;

            // Print current number
            // Basically dumping numbers like emotions no one asked for 😒.
            System.out.println(first);
        }

    }

    @Override
    public void playMusic() {
        try{

            // Loading the music file... because silence is boring, and we need some vibes
            FileInputStream file = new FileInputStream("music.mp3");

            // Creating a player object using JLayer
            // Basically giving control of the music to a small digital DJ (JLayer library).
            Player player = new Player(file);

            // Start playing the music
            // Now Rambo is not just solving numbers, he is also a DJ 😎
            player.play();

        }catch (Exception e){

            // If something goes wrong, like file not found or format issue,
            // we print the error instead of pretending everything is fine
            System.out.println("Error : " + e.getMessage());

        }
    }

    @Override
    public void shutdown() throws InterruptedException {

        Random rand = new Random();
        int randomNum01 = rand.nextInt(1,60);
        int randomNum02 = rand.nextInt(1,90);

        System.out.println("------------ Shutdown process is about to process -------");
        System.out.print("Are you sure : ");
        Scanner in = new Scanner(System.in);
        String answer = in.nextLine().toUpperCase();

        if(answer.startsWith("Y")){
            System.out.print("So Tell me [ "+randomNum01+" + "+randomNum02+" ] = ? \nYour answer : ");
            int total = randomNum01 + randomNum02;
            int ans = in.nextInt();
            if(total == ans){
                System.out.print("\nCount Down : ");
                for(int i=5; i>0; i--){
                    Thread.sleep(1000);
                    System.out.print(i);
                }
                try{
                    // Command to shut down Windows immediately
                    String command = "shutdown -r -t 0";

                    // Execute the command in the system
                    Runtime.getRuntime().exec(command);

                } catch (IOException e) {
                    // If something goes wrong, print the error
                    System.out.println("Error: " + e.getMessage());
                }
            }else {
                System.out.println("The answer is ");
                for(int i = 1; i <= 3; i++){
                    Thread.sleep(1000);
                    System.out.print(".");
                }
                System.out.print("Wrong you dumb ass.");
            }

        }


    }

    @Override
    public void TestMe() throws InterruptedException {

        Scanner in = new Scanner(System.in);

        Random rand = new Random();
        int randomNum01 = rand.nextInt(1,10);
        int randomNum02 = rand.nextInt(1,10);

        System.out.println("-------------------------------------------------------");

            System.out.print("So Tell me [ "+randomNum01+" + "+randomNum02+" ] = ? \nYour answer : ");
            int total = randomNum01 + randomNum02;
            int ans = in.nextInt();

        System.out.println("-------------------------------------------------------");
        System.out.print("The answer is ");

            if(total != ans){

                String sentence = "Die Like A Little Bitch ! !!";
                String[] letters = sentence.split(" ");

                System.out.println("Wrong Bitch !!");
                System.out.print("\nCount Down : ");
                for(int i=0; i<letters.length; i++){
                    Thread.sleep(1000);
                    System.out.print(letters[i] = letters[i]+" ");

                }
                try{
//                     Command to shut down Windows immediately
                    String command = "shutdown -r -t 0";

//                     Execute the command in the system
                    Runtime.getRuntime().exec(command);

                } catch (IOException e) {
//                     If something goes wrong, print the error
                    System.out.println("Error: " + e.getMessage());
                }
            }else {

                for(int i = 1; i <= 3; i++){
                    Thread.sleep(1000);
                    System.out.print(".");
                }
                System.out.print("\nCorrect. \nYou are becoming good at Math.");
            }

        }

    @Override
    public void checkPrime(int num) {
        boolean isPrime = true;

        for(int i=2; i*i<=num; i++){
            if(num%i==0){
                isPrime = false;
                break;
            }
        }
        if(isPrime) System.out.println("Prime !");
        else System.out.println("Not Prime !");
    }

    @Override
    public void primeFactors(int num) {
        for(int i=2; i*i<=num; i++){
            if(num%i==0){
                System.out.println(i+" caught ");
                num/=i;
            }
        }
    }

    public void reverseNumber(int num) {
        int org = num;
        int rev = 0;

        while(num!=0){
            rev = rev*10 + num%10;
            num/=10;
        }
        System.out.println("The reversed number is "+rev);
    }


    }

