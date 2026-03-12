package JavaLab.Lab10.Problem04;

import javax.swing.*;

/*
    4. Write a java program to compute simple interest. The input and output
    required are taken from/to prebuilt dialog box.
 */

public class Code04 {
    public static void main(String[] args) {
        try {
            double p = Double.parseDouble(JOptionPane.showInputDialog("Enter Principal:"));
            double t = Double.parseDouble(JOptionPane.showInputDialog("Enter Time (years):"));
            double r = Double.parseDouble(JOptionPane.showInputDialog("Enter Rate (%):"));

            double si = (p * t * r) / 100;

            JOptionPane.showMessageDialog(null, "Simple Interest: " + si);
        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(null, "Enter valid numbers!");
        }
    }
}