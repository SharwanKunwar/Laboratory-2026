package JavaLab.Lab09.Problem01;

import java.io.FileOutputStream;
import java.io.FileInputStream;
import java.io.IOException;

public class Code01 {

    public static void main(String[] args) {

        String text = "java is object-oriented programming";
        int vowelCount = 0;

        try {

            // Writing to file
            FileOutputStream fos = new FileOutputStream("sample.txt");
            fos.write(text.getBytes());
            fos.close();

            // Reading from file
            FileInputStream fis = new FileInputStream("sample.txt");
            int ch;

            while ((ch = fis.read()) != -1) {
                char c = Character.toLowerCase((char) ch);

                if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                    vowelCount++;
                }
            }

            fis.close();

            System.out.println("Total number of vowels: " + vowelCount);

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}