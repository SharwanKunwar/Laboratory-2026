package Day01.Games.Luckey777;

import javax.swing.plaf.basic.BasicInternalFrameTitlePane;
import java.util.Random;
import java.util.Scanner;

public class Luckey777 {
    static void main(String[] args) {




        Scanner sc = new Scanner(System.in);
        while (p1.Amount != 0){
            Random random = new Random();
            int randomNumber1 = (int) Math.floor(Math.random() * 3 );
            int randomNumber2 = (int) Math.floor(Math.random() * 3 );
            int randomNumber3 = (int) Math.floor(Math.random() * 3 );
            Player p1 = new Player("Sharwan jung kunwar","sharwankunwar07@gmail.com",100L,randomNumber1,randomNumber2,randomNumber3);
            System.out.println("Enter your bet: ");
            int bet = sc.nextInt();
            p1.bet(bet);
            p1.play();
            p1.result();
        }
    }
}
