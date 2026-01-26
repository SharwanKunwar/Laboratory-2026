package TikTokViewsIncreaser;

import java.awt.Desktop;
import java.awt.Robot;
import java.net.URI;

public class Code01 {
    static void main(String[] args) {
        try {
            // 1️⃣ Open TikTok video in default browser
            Desktop.getDesktop().browse(
                    new URI("https://www.tiktok.com/@rupesh0_2/video/7593671647035510023?is_from_webapp=1&sender_device=pc&web_id=7599599174305678866")
            );

            // 2️⃣ Wait for browser and video to load
            Thread.sleep(8000);

            // 3️⃣ Create Robot instance
            Robot robot = new Robot();

            // 4️⃣ Loop scroll up & down
            for (int i = 0; i < 100; i++) {  // loop 5 times
                // Scroll DOWN (next video)
                robot.mouseWheel(5);
                System.out.println("Scrolled down to next video");
                Thread.sleep(1000); // wait 3 seconds

                // Scroll UP (back to original video)
                robot.mouseWheel(-5);
                System.out.println("Scrolled up to previous video");
                Thread.sleep(1000); // wait 3 seconds
            }

            System.out.println("Done scrolling up and down!");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
