package org.example;

import java.sql.Connection;
import java.sql.DriverManager;

public class Main {

    static final String URL = "jdbc:postgresql://localhost:5432/vehicle";
    static final String USER = "postgres";
    static final String PASS = "dob2060121";

    public static void main(String[] args) {

        try {
            // Connect to database
            Connection conn = DriverManager.getConnection(URL, USER, PASS);

            // Success message
            System.out.println("Database connected successfully!");

            // Close connection
            conn.close();

        } catch (Exception e) {
            System.out.println("Failed to connect to database.");
            e.printStackTrace();
        }
    }
}