package JavaLab.Lab09.Problem03;

import java.io.FileWriter;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

// Write a java program to save 3 student record(such as roll, name, address and phone) into student.txt file
// and display student record whose address is kirtipur.

public class Code03 {

    public static void main(String[] args) {

        try {
            Scanner sc = new Scanner(System.in);
            FileWriter fw = new FileWriter("student.txt");

            // Taking input for 3 students
            for (int i = 1; i <= 2; i++) {

                System.out.println("Enter Roll:");
                String roll = sc.nextLine();

                System.out.println("Enter Name:");
                String name = sc.nextLine();

                System.out.println("Enter Address:");
                String address = sc.nextLine();

                System.out.println("Enter Phone:");
                String phone = sc.nextLine();

                fw.write(roll + "," + name + "," + address + "," + phone + "\n");
            }

            fw.close();

            System.out.println("\nStudent records saved successfully.\n");

            // Reading file
            FileReader fr = new FileReader("student.txt");
            Scanner fileReader = new Scanner(fr);

            System.out.println("Students from Kirtipur:\n");

            while (fileReader.hasNextLine()) {
                String line = fileReader.nextLine();
                String[] data = line.split(",");

                if (data[2].equalsIgnoreCase("kirtipur")) {
                    System.out.println("Roll: " + data[0]);
                    System.out.println("Name: " + data[1]);
                    System.out.println("Address: " + data[2]);
                    System.out.println("Phone: " + data[3]);
                    System.out.println();
                }
            }

            fr.close();

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}