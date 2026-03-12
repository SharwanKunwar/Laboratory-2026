package JavaLab.Lab10.Problem01;

import javax.swing.*;

/* 1. Write a java program using swing component to find Area and Perimeter of Rectangle Use text field for inputs and outputs. Your program should display the result when the user click a button */

public class Code01 {
    public static void main(String[] args) {
        JFrame f = new JFrame("Rectangle Calculator");
        f.setSize(400, 300);
        f.setLayout(null);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JLabel l1 = new JLabel("Length:"), l2 = new JLabel("Breadth:"), res = new JLabel("Result:");
        l1.setBounds(50,30,100,25); l2.setBounds(50,70,100,25); res.setBounds(50,150,300,25);
        f.add(l1); f.add(l2); f.add(res);

        JTextField t1 = new JTextField(), t2 = new JTextField();
        t1.setBounds(150,30,150,25); t2.setBounds(150,70,150,25);
        f.add(t1); f.add(t2);

        JButton btn = new JButton("Calculate");
        btn.setBounds(150,110,120,30);
        f.add(btn);

        btn.addActionListener(e -> {
            try {
                double length = Double.parseDouble(t1.getText());
                double breadth = Double.parseDouble(t2.getText());
                res.setText("Area: " + (length*breadth) + " | Perimeter: " + (2*(length+breadth)));
            } catch(Exception ex) {
                JOptionPane.showMessageDialog(f,"Enter valid numbers!");
            }
        });

        f.setVisible(true);
    }
}