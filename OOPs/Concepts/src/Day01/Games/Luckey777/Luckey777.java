package Day01.Games.Luckey777;

import java.util.Random;
import java.util.Scanner;

public class Luckey777 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        Random random = new Random();

        String[] slot = {"7️⃣", "👻", "👽"};
        long amount = 100L;
        int bet;

        while (amount > 0) {

            System.out.println("\nCurrent Balance: " + amount);
            System.out.print("Enter your bet: ");
            bet = sc.nextInt();



            if (bet <= 0 ) {
                System.out.println("❌ Invalid bet! please enter positive");
            } else if( bet > amount){
                System.out.println("\n💀 Game Over! You lost all your money.");
                return;
            }


            int r1 = random.nextInt(3);
            int r2 = random.nextInt(3);
            int r3 = random.nextInt(3);

            System.out.println("\n\n\n\n\nc-----------------------------------------");
            System.out.println("\t\t" + slot[r1] + " " + slot[r2] + " " + slot[r3]);
            System.out.println("-----------------------------------------");

            if (r1 == r2 && r1 == r3) {
                amount += bet * 3;
                System.out.println("🎉 YOU WIN!");
            } else {
                amount -= bet;
                System.out.println("❌ You lost!");
            }
        }

        System.out.println("\n💀 Game Over! You lost all your money.");
        sc.close();
    }
}
