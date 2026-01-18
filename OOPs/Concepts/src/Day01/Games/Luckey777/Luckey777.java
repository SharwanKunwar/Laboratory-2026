package Day01.Games.Luckey777;

import javax.swing.plaf.basic.BasicInternalFrameTitlePane;
import java.util.Random;
import java.util.Scanner;

public class Luckey777 {
    static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] slot = {"7️⃣","👻","👽"};
        boolean isWin = false;
        long amount = 100L;
        int bet=0;

        Random random = new Random();

        while(amount!=0){
            int rand01 = (int) Math.floor(Math.random()*3);
            int rand02 = (int) Math.floor(Math.random()*3);
            int rand03 = (int) Math.floor(Math.random()*3);

            System.out.print("Enter your bet: ");
            bet = sc.nextInt();

            if(rand01==rand02&&rand01==rand03){
                amount+=(bet+bet);
                System.out.println("\n");
                System.out.println("---------------------------------------------------------");
                System.out.println("\t\t"+slot[rand01]+" "+slot[rand02]+" "+slot[rand03]);
                System.out.println("---------------------------------------------------------");
                System.out.println("You did well !!");
                System.out.println("you win and your total amount is: "+amount);
            }else {
                amount-=bet;
                System.out.println("\n");
                System.out.println("---------------------------------------------------------");
                System.out.println("\t\t"+slot[rand01]+" "+slot[rand02]+" "+slot[rand03]);
                System.out.println("---------------------------------------------------------");
                System.out.println("You lost bet Try again wth "+amount);
            }
            if(amount==0) System.out.println("You lost your all money\ntry better next time");

        }

    }
}
