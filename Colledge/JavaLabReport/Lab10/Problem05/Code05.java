package JavaLab.Lab10.Problem05;

import javax.swing.*;

public class Code05 {
    public static void main(String[] args) {
        JFrame f = new JFrame("Student Registration Form");
        f.setSize(500, 500);
        f.setLayout(null);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Labels
        JLabel nameL = new JLabel("Name:"); nameL.setBounds(50, 30, 100, 25);
        JLabel addrL = new JLabel("Address:"); addrL.setBounds(50, 70, 100, 25);
        JLabel emailL = new JLabel("Email:"); emailL.setBounds(50, 110, 100, 25);
        JLabel passL = new JLabel("Password:"); passL.setBounds(50, 150, 100, 25);
        JLabel genderL = new JLabel("Gender:"); genderL.setBounds(50, 190, 100, 25);
        JLabel hobbiesL = new JLabel("Hobbies:"); hobbiesL.setBounds(50, 230, 100, 25);
        JLabel countryL = new JLabel("Country:"); countryL.setBounds(50, 270, 100, 25);
        JLabel opinionL = new JLabel("Opinion:"); opinionL.setBounds(50, 310, 100, 25);

        f.add(nameL); f.add(addrL); f.add(emailL); f.add(passL);
        f.add(genderL); f.add(hobbiesL); f.add(countryL); f.add(opinionL);

        // Fields
        JTextField nameT = new JTextField(); nameT.setBounds(150, 30, 200, 25);
        JTextField addrT = new JTextField(); addrT.setBounds(150, 70, 200, 25);
        JTextField emailT = new JTextField(); emailT.setBounds(150, 110, 200, 25);
        JPasswordField passT = new JPasswordField(); passT.setBounds(150, 150, 200, 25);

        // Gender radio buttons
        JRadioButton male = new JRadioButton("Male"); male.setBounds(150, 190, 70, 25);
        JRadioButton female = new JRadioButton("Female"); female.setBounds(230, 190, 80, 25);
        ButtonGroup genderGroup = new ButtonGroup(); genderGroup.add(male); genderGroup.add(female);

        // Hobbies checkboxes
        JCheckBox hobby1 = new JCheckBox("Reading"); hobby1.setBounds(150, 230, 100, 25);
        JCheckBox hobby2 = new JCheckBox("Sports"); hobby2.setBounds(250, 230, 100, 25);

        // Country dropdown
        String[] countries = {"Nepal", "India", "USA", "Other"};
        JComboBox<String> countryC = new JComboBox<>(countries);
        countryC.setBounds(150, 270, 200, 25);

        // Opinion textarea
        JTextArea opinionT = new JTextArea(); opinionT.setBounds(150, 310, 200, 50);

        // Submit button
        JButton submit = new JButton("Submit"); submit.setBounds(180, 380, 100, 30);

        // Add fields to frame
        f.add(nameT); f.add(addrT); f.add(emailT); f.add(passT);
        f.add(male); f.add(female); f.add(hobby1); f.add(hobby2);
        f.add(countryC); f.add(opinionT); f.add(submit);

        // Button action
        submit.addActionListener(e -> {
            String name = nameT.getText();
            String addr = addrT.getText();
            String email = emailT.getText();
            String pass = new String(passT.getPassword());
            String gender = male.isSelected() ? "Male" : female.isSelected() ? "Female" : "Not selected";
            String hobbies = (hobby1.isSelected() ? "Reading " : "") + (hobby2.isSelected() ? "Sports" : "");
            String country = (String) countryC.getSelectedItem();
            String opinion = opinionT.getText();

            JOptionPane.showMessageDialog(f,
                    "Name: " + name + "\nAddress: " + addr + "\nEmail: " + email +
                            "\nPassword: " + pass + "\nGender: " + gender +
                            "\nHobbies: " + hobbies + "\nCountry: " + country +
                            "\nOpinion: " + opinion
            );
        });

        f.setVisible(true);
    }
}