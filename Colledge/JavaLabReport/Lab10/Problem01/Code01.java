package JavaLab.Lab10.Problem01;

import javax.swing.*;
import java.awt.event.*;

/*
    1. Write a java program using swing component to find Area and Perimeter of
       Rectangle Use text field for inputs and outputs. Your program should display
       the result when the user click a button
 */

public class Code01 {

    public static void main(String[] args) {
        // Create frame
        JFrame frame = new JFrame("Rectangle Area & Perimeter Calculator");
        frame.setSize(400, 300);
        frame.setLayout(null);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Labels
        JLabel lengthLabel = new JLabel("Length:");
        lengthLabel.setBounds(50, 30, 100, 25);
        frame.add(lengthLabel);

        JLabel breadthLabel = new JLabel("Breadth:");
        breadthLabel.setBounds(50, 70, 100, 25);
        frame.add(breadthLabel);

        JLabel resultLabel = new JLabel("Result:");
        resultLabel.setBounds(50, 150, 300, 25);
        frame.add(resultLabel);

        // Text Fields
        JTextField lengthField = new JTextField();
        lengthField.setBounds(150, 30, 150, 25);
        frame.add(lengthField);

        JTextField breadthField = new JTextField();
        breadthField.setBounds(150, 70, 150, 25);
        frame.add(breadthField);

        // Button
        JButton calculateButton = new JButton("Calculate");
        calculateButton.setBounds(150, 110, 120, 30);
        frame.add(calculateButton);

        // Button Action
        calculateButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    double length = Double.parseDouble(lengthField.getText());
                    double breadth = Double.parseDouble(breadthField.getText());

                    double area = length * breadth;
                    double perimeter = 2 * (length + breadth);

                    resultLabel.setText("Area: " + area + " | Perimeter: " + perimeter);
                } catch (NumberFormatException ex) {
                    JOptionPane.showMessageDialog(frame, "Please enter valid numbers!");
                }
            }
        });

        frame.setVisible(true);
    }
}