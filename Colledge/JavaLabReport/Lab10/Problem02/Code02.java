package JavaLab.Lab10.Problem02;

import javax.swing.*;
import java.awt.event.*;


/*
    2. Write a program using Swing components to add and subtract two numbers.
    Use text fields for inputs and output. Your program should display the result
    when the user press button.
 */

public class Code02 {

    public static void main(String[] args) {
        // Create frame
        JFrame frame = new JFrame("Add & Subtract Calculator");
        frame.setSize(400, 300);
        frame.setLayout(null);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Labels
        JLabel num1Label = new JLabel("Number 1:");
        num1Label.setBounds(50, 30, 100, 25);
        frame.add(num1Label);

        JLabel num2Label = new JLabel("Number 2:");
        num2Label.setBounds(50, 70, 100, 25);
        frame.add(num2Label);

        JLabel resultLabel = new JLabel("Result:");
        resultLabel.setBounds(50, 180, 300, 25);
        frame.add(resultLabel);

        // Text Fields
        JTextField num1Field = new JTextField();
        num1Field.setBounds(150, 30, 150, 25);
        frame.add(num1Field);

        JTextField num2Field = new JTextField();
        num2Field.setBounds(150, 70, 150, 25);
        frame.add(num2Field);

        // Buttons
        JButton addButton = new JButton("Add");
        addButton.setBounds(50, 120, 120, 30);
        frame.add(addButton);

        JButton subtractButton = new JButton("Subtract");
        subtractButton.setBounds(200, 120, 120, 30);
        frame.add(subtractButton);

        // Add Button Action
        addButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    double num1 = Double.parseDouble(num1Field.getText());
                    double num2 = Double.parseDouble(num2Field.getText());
                    double sum = num1 + num2;
                    resultLabel.setText("Result: " + sum);
                } catch (NumberFormatException ex) {
                    JOptionPane.showMessageDialog(frame, "Please enter valid numbers!");
                }
            }
        });

        // Subtract Button Action
        subtractButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    double num1 = Double.parseDouble(num1Field.getText());
                    double num2 = Double.parseDouble(num2Field.getText());
                    double diff = num1 - num2;
                    resultLabel.setText("Result: " + diff);
                } catch (NumberFormatException ex) {
                    JOptionPane.showMessageDialog(frame, "Please enter valid numbers!");
                }
            }
        });

        frame.setVisible(true);
    }
}