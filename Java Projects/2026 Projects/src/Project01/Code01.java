package Project01;

import java.awt.Desktop;
import java.net.URI;
import java.util.Scanner;

public class Code01 {
    static void main(String[] args) {
        System.out.println("------------------------------------------");
        System.out.println("1. YouTube \t 2. tiktok");
        System.out.println("3. shutdown \t 4. sharwan jung kunwar");
        System.out.println("------------------------------------------");

        Scanner sc = new Scanner(System.in);
        int choice = sc.nextInt();

        switch (choice) {
            case 1:
                openYoutube();
                break;

            case 2:
                tiktok();
                break;

            case 3:
                shutdown();
                break;

            case 4:
                sharwanjungkunwar();
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
    static void tiktok() {
        try {
            Desktop desktop = Desktop.getDesktop();
            desktop.browse(new URI("https://www.tiktok.com"));
            System.out.println("YouTube opened successfully!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    static void sharwanjungkunwar() {
        try {
            Desktop desktop = Desktop.getDesktop();
            desktop.browse(new URI("https://sharwan-kunwar.vercel.app/"));
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
