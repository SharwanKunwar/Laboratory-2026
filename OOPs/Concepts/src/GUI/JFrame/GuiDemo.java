package GUI.JFrame;

import javax.swing.*;
import java.awt.*;

public class GuiDemo {
    public static void main(String[] args) {


        // creates a frame
        JFrame frame = new JFrame();
        // sets title of frame
        frame.setTitle("Music Player");
        // sets the x-dimension, and y-dimension of frame
        frame.setSize(400,400);
        // make frame visible
        frame.setVisible(true);
        // prevent frame from being resized
        frame.setResizable(false);
        // exit out of application
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // create an imageIcon
        ImageIcon imageIcon = new ImageIcon("/play.png");
        // change icon of frame
        frame.setIconImage(imageIcon.getImage());

        // change color of background
        frame.getContentPane().setBackground(Color.green);
        // also add new color
        frame.getContentPane().setBackground(new Color(0, 0, 0));
    }
}
