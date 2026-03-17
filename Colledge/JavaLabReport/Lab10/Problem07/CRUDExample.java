package JavaLab.Lab10.Problem07;

import java.sql.*;

//7.Write a Java program to connect to the database and perform CRUD operation [(Database: Company Table: Employee (Eid, Name, Address And Department))]

public class CRUDExample {

    public static void main(String[] args) {

        try {
            Connection con = DriverManager.getConnection(
                    "jdbc:mysql://localhost:3306/company","root","");

            Statement stmt = con.createStatement();

            // Insert
            stmt.executeUpdate("INSERT INTO Employee VALUES(1,'Ram','Kathmandu','IT')");

            // Read
            ResultSet rs = stmt.executeQuery("SELECT * FROM Employee");
            while(rs.next()){
                System.out.println(rs.getInt(1)+" "+rs.getString(2));
            }

            // Update
            stmt.executeUpdate("UPDATE Employee SET Department='HR' WHERE Eid=1");

            // Delete
            stmt.executeUpdate("DELETE FROM Employee WHERE Eid=1");

            con.close();

        } catch(Exception e){
            System.out.println(e);
        }
    }
}