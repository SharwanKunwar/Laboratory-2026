package JavaLab.Lab10.Problem02;

import javax.swing.*;

//2. Write a program using Swing components to add and subtract two numbers.
//Use text fields for inputs and output. Your program should display the result
//when the user press button.

public class Code02 {
    public static void main(String[] args) {
        JFrame f = new JFrame("Add & Subtract");
        f.setSize(400, 300); f.setLayout(null); f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JLabel res = new JLabel("Result:"); res.setBounds(50, 180, 300, 25); f.add(res);

        JTextField n1 = new JTextField(); n1.setBounds(150, 30, 150, 25); f.add(n1);
        JTextField n2 = new JTextField(); n2.setBounds(150, 70, 150, 25); f.add(n2);

        JButton add = new JButton("Add"); add.setBounds(50, 120, 120, 30); f.add(add);
        JButton sub = new JButton("Subtract"); sub.setBounds(200, 120, 120, 30); f.add(sub);

        add.addActionListener(e -> {
            try {
                double sum = Double.parseDouble(n1.getText()) + Double.parseDouble(n2.getText());
                res.setText("Result: " + sum);
            } catch(Exception ex){ JOptionPane.showMessageDialog(f,"Enter valid numbers!"); }
        });

        sub.addActionListener(e -> {
            try {
                double diff = Double.parseDouble(n1.getText()) - Double.parseDouble(n2.getText());
                res.setText("Result: " + diff);
            } catch(Exception ex){ JOptionPane.showMessageDialog(f,"Enter valid numbers!"); }
        });

        f.setVisible(true);
    }
}