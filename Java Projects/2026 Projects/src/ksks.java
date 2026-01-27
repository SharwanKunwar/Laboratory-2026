import javax.swing.*;
import java.awt.*;
import java.net.URI;

public class ksks {

    public static void main(String[] args) {

        // Frame
        JFrame frame = new JFrame("PC Controller");
        frame.setSize(350, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(new GridLayout(4, 2, 10, 10)); // grid layout

        // Buttons
        JButton btnYouTube = new JButton("Open YouTube");
        JButton btnTikTok = new JButton("Open TikTok");
        JButton btnGoogle = new JButton("Open Google");
        JButton btnNotepad = new JButton("Open Notepad");
        JButton btnCalculator = new JButton("Open Calculator");
        JButton btnShutdown = new JButton("Shutdown PC");
        JButton btnExit = new JButton("Exit");

        // Open YouTube
        btnYouTube.addActionListener(e -> openSite("https://www.youtube.com"));

        // Open TikTok
        btnTikTok.addActionListener(e -> openSite("https://www.tiktok.com"));

        // Open Google
        btnGoogle.addActionListener(e -> openSite("https://www.google.com"));

        // Open Notepad
        btnNotepad.addActionListener(e -> runCommand("notepad"));

        // Open Calculator
        btnCalculator.addActionListener(e -> runCommand("calc"));

        // Shutdown
        btnShutdown.addActionListener(e -> runCommand("shutdown -s -t 0"));

        // Exit app
        btnExit.addActionListener(e -> System.exit(0));

        // Add buttons
        frame.add(btnYouTube);
        frame.add(btnTikTok);
        frame.add(btnGoogle);
        frame.add(btnNotepad);
        frame.add(btnCalculator);
        frame.add(btnShutdown);
        frame.add(btnExit);

        // Show frame
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
    }

    // Method to open websites
    static void openSite(String url) {
        try {
            Desktop.getDesktop().browse(new URI(url));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Method to run system commands
    static void runCommand(String cmd) {
        try {
            Runtime.getRuntime().exec(cmd);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
