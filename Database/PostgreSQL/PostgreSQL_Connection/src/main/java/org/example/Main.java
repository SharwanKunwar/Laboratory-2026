package org.example;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;
import java.sql.*;

public class Main {

    static final String URL = "jdbc:postgresql://localhost:5432/friends";
    static final String USER = "postgres";
    static final String PASS = "dob2060121";

    public static void main(String[] args) {

        JFrame f = new JFrame("Friends Manager");

        // Main Panel with padding
        JPanel mainPanel = new JPanel(new BorderLayout());
        mainPanel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        f.setContentPane(mainPanel);

        // Form Panel
        JPanel form = new JPanel(new GridLayout(7, 2, 10, 10));

        JTextField id = new JTextField();
        JTextField name = new JTextField();
        JTextField age = new JTextField();
        JTextField contact = new JTextField();
        JTextField address = new JTextField();
        JTextField gmail = new JTextField();
        JTextField quote = new JTextField();

        form.add(new JLabel("ID")); form.add(id);
        form.add(new JLabel("Name")); form.add(name);
        form.add(new JLabel("Age")); form.add(age);
        form.add(new JLabel("Contact")); form.add(contact);
        form.add(new JLabel("Address")); form.add(address);
        form.add(new JLabel("Gmail")); form.add(gmail);
        form.add(new JLabel("Quote")); form.add(quote);

        // Table
        String columns[] = {"ID","Name","Age","Contact","Address","Gmail","Quote"};
        DefaultTableModel model = new DefaultTableModel(columns, 0);
        JTable table = new JTable(model);
        JScrollPane tablePane = new JScrollPane(table);

        // Buttons Panel
        JPanel buttons = new JPanel(new FlowLayout(FlowLayout.CENTER, 15, 10));

        JButton insert = new JButton("Insert");
        JButton read = new JButton("Read");
        JButton update = new JButton("Update");
        JButton delete = new JButton("Delete");

        buttons.add(insert);
        buttons.add(read);
        buttons.add(update);
        buttons.add(delete);

        // Add to main panel
        mainPanel.add(form, BorderLayout.NORTH);
        mainPanel.add(tablePane, BorderLayout.CENTER);
        mainPanel.add(buttons, BorderLayout.SOUTH);

        try {
            Class.forName("org.postgresql.Driver");
            Connection con = DriverManager.getConnection(URL, USER, PASS);

            // INSERT
            insert.addActionListener(e -> {
                try {
                    Statement stmt = con.createStatement();
                    stmt.executeUpdate(
                            "INSERT INTO friends VALUES (" +
                                    id.getText() + ",'" +
                                    name.getText() + "'," +
                                    age.getText() + ",'" +
                                    contact.getText() + "','" +
                                    address.getText() + "','" +
                                    gmail.getText() + "','" +
                                    quote.getText() + "')");

                    JOptionPane.showMessageDialog(f, "Inserted Successfully");

                } catch (Exception ex) {
                    JOptionPane.showMessageDialog(f, ex.toString());
                }
            });

            // READ
            read.addActionListener(e -> {
                try {
                    model.setRowCount(0);
                    Statement stmt = con.createStatement();
                    ResultSet rs = stmt.executeQuery("SELECT * FROM friends");

                    while (rs.next()) {
                        model.addRow(new Object[]{
                                rs.getInt("id"),
                                rs.getString("fullName"),
                                rs.getInt("age"),
                                rs.getString("contact"),
                                rs.getString("address"),
                                rs.getString("gmail"),
                                rs.getString("quote")
                        });
                    }

                } catch (Exception ex) {
                    JOptionPane.showMessageDialog(f, ex.toString());
                }
            });

            // UPDATE
            update.addActionListener(e -> {
                try {
                    Statement stmt = con.createStatement();
                    stmt.executeUpdate(
                            "UPDATE friends SET contact='" +
                                    contact.getText() +
                                    "' WHERE id=" + id.getText());

                    JOptionPane.showMessageDialog(f, "Updated Successfully");

                } catch (Exception ex) {
                    JOptionPane.showMessageDialog(f, ex.toString());
                }
            });

            // DELETE
            delete.addActionListener(e -> {
                try {
                    Statement stmt = con.createStatement();
                    stmt.executeUpdate(
                            "DELETE FROM friends WHERE id=" +
                                    id.getText());

                    JOptionPane.showMessageDialog(f, "Deleted Successfully");

                } catch (Exception ex) {
                    JOptionPane.showMessageDialog(f, ex.toString());
                }
            });

        } catch (Exception ex) {
            ex.printStackTrace();
        }

        f.setSize(750, 500);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        f.setVisible(true);
    }
}