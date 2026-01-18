package Day01.Games.Luckey777;

import java.util.Random;
import java.util.Scanner;

public class Player {
    String[] slot = {"7️⃣","👻","👽"};
    String name;
    String email;
    long Amount;
    boolean isWon = false;
    int bet;

    int rand01,rand02,rand03;



    Player(String name, String email,long Amount,int rand01, int rand02, int rand03){
        this.name = name;
        this.email = email;
        this.Amount = Amount;
        this.rand01 = rand01;
        this.rand02 = rand02;
        this.rand03 = rand03;
    }

    void bet(int bet){
        this.bet = bet;
    }

    void play() {
        System.out.println(slot[rand01] +" "+ slot[rand02] +" "+ slot[rand03]);
        if(rand01 == rand02 && rand01 == rand03){
            isWon = true;
        }
    }
    void result(){
        if(isWon) {
            Amount*=bet;
            System.out.println("You won the bet");
        }else {
            Amount-=bet;
            System.out.println("try again you lost "+bet);
        }
    }
}
