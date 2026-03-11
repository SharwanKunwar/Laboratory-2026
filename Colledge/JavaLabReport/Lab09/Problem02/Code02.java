package JavaLab.Lab09.Problem02;

import java.io.FileWriter;
import java.io.FileReader;
import java.io.IOException;

// Write a java program to read and write file using FileWriter and FileReader class.

public class Code02 {

    public static void main(String[] args)
    {

        try {
            // Writing into file
            FileWriter fw = new FileWriter("sample.txt");
            fw.write("Java is a powerful programming language.");
            fw.close();

            System.out.println("Data written successfully.");

            // Reading from file
            FileReader fr = new FileReader("sample.txt");
            int ch;

            System.out.println("File Content:");

            while ((ch = fr.read()) != -1) {
                System.out.print((char) ch);
            }

            fr.close();

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }

    }
}