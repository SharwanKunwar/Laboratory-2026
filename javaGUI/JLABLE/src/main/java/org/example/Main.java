package org.example;

// label IN GUI

import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        ImageIcon icon = new ImageIcon("img06.jpg");
        // creating frame
        JFrame frame = new JFrame();
        frame.setSize(500, 500);
        frame.setVisible(true);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // creating label and add to the frame
        JLabel label = new JLabel("Hello World");
        frame.add(label);


        label.setIcon(icon);

    }
}