package JavaLab.Lab10.Problem03;

import javax.swing.*;

/*
    3. Write a Java program to find the smallest and largest among three numbers
    using swing components. Use text fields for input and output. Your program
    should display the result when the user press button.
 */

public class Code03 {
    public static void main(String[] args) {
        JFrame f = new JFrame("Smallest & Largest");
        f.setSize(400, 300); f.setLayout(null); f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JTextField n1 = new JTextField(); n1.setBounds(150,30,150,25); f.add(n1);
        JTextField n2 = new JTextField(); n2.setBounds(150,70,150,25); f.add(n2);
        JTextField n3 = new JTextField(); n3.setBounds(150,110,150,25); f.add(n3);

        JLabel res = new JLabel("Result:"); res.setBounds(50,180,300,25); f.add(res);

        JButton calc = new JButton("Calculate"); calc.setBounds(100, 140, 200, 30); f.add(calc);

        calc.addActionListener(e -> {
            try {
                double a = Double.parseDouble(n1.getText());
                double b = Double.parseDouble(n2.getText());
                double c = Double.parseDouble(n3.getText());

                double min = Math.min(a, Math.min(b, c));
                double max = Math.max(a, Math.max(b, c));

                res.setText("Smallest: " + min + " | Largest: " + max);
            } catch(Exception ex) {
                JOptionPane.showMessageDialog(f,"Enter valid numbers!");
            }
        });

        f.setVisible(true);
    }
}