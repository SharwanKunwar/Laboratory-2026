package org.example;

import javax.swing.*;
import java.awt.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
//        JFrame frame = new JFrame();
//        frame.setTitle("Calculator");
//        frame.setSize(500,500);
//        frame.setVisible(true);
//        frame.getContentPane().setBackground(Color.red);
//        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        Scanner sc = new Scanner(System.in);
        System.out.println("1. calculator\t2. music");
        int choice = sc.nextInt();

        if(choice == 1){
            new MyFrame();
        }else if(choice == 2){
            new Music();
        }
    }
}