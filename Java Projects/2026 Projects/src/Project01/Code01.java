package Project01;

import java.awt.Desktop;
import java.net.URI;
import java.util.Scanner;

public class Code01 {
    static void main(String[] args) {
        System.out.println("------------------------------------------");
        System.out.println("1. YouTube \t 2. Notepad");
        System.out.println("3. shutdown \t 3.");
        System.out.println("------------------------------------------");

        Scanner sc = new Scanner(System.in);
        int choice = sc.nextInt();

        switch (choice) {
            case 1:
                openYoutube();
                break;

            case 3:
                shutdown();
                break;
        }

    }
    static void openYoutube() {
        try {
            Desktop desktop = Desktop.getDesktop();
            desktop.browse(new URI("https://www.youtube.com"));
            System.out.println("YouTube opened successfully!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    static void shutdown() {
        try {
            Runtime.getRuntime().exec("shutdown -s -t 0");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
