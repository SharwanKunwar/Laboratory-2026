package org.example;

//How to Connect Java with PostgreSQL Database

import java.sql.Connection;
import java.sql.DriverManager;

public class Main {
    static final String URL = "jdbc:postgresql://localhost:5432/vehicle";
    static final String user = "postgres";
    static final String password = "dob2060121";

    public static void main(String[] args) {
        try {
            // connect to database
            Connection con = DriverManager.getConnection(URL, user, password);
            // message
            System.out.println("Database connection established");
            // close connection
            con.close();

        }catch (Exception e){
            System.out.println("Failed to connect to database");
            e.printStackTrace();
        }
    }
}