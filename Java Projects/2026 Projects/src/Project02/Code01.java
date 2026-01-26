package Project02;

import java.io.IOException;

public class Code01 {

    // Full path to adb.exe
    private static final String ADB_PATH = "C:\\adb\\platform-tools\\adb.exe";

    public static void main(String[] args) throws IOException, InterruptedException {
        // TikTok video link
        String videoLink = "https://vt.tiktok.com/ZSaPpex6y/"; // <-- Replace with your video link

        // 1️⃣ Open the TikTok video
        openTikTokVideo(videoLink);
        Thread.sleep(5000); // wait 5 seconds for the video to load

        // 2️⃣ Scroll down and up 5 times
        for (int i = 1; i <= 5; i++) {
            System.out.println("Scroll iteration: " + i);

            Thread.sleep(1500); // let video fully focus
            scrollDown();

            Thread.sleep(4000); // watch next video
            scrollUp();

            Thread.sleep(4000); // watch previous video
        }


        System.out.println("Finished scrolling 5 times!");
    }

    // Execute ADB command with full path
    private static void executeAdbCommand(String command) throws IOException, InterruptedException {
        String fullCommand = "\"" + ADB_PATH + "\" " + command;
        Process process = Runtime.getRuntime().exec(fullCommand);
        process.waitFor();
    }

    // Open TikTok video using the link
    private static void openTikTokVideo(String url) throws IOException, InterruptedException {
        String command = "shell am start -a android.intent.action.VIEW -d \"" + url + "\"";
        executeAdbCommand(command);
    }

    // Scroll down → next video (strong upward swipe)
    private static void scrollDown() throws IOException, InterruptedException {
        executeAdbCommand("shell input swipe 540 1800 540 300 1000");
    }

    // Scroll up → previous video (strong downward swipe)
    private static void scrollUp() throws IOException, InterruptedException {
        executeAdbCommand("shell input swipe 540 300 540 1800 1000");
    }

}
