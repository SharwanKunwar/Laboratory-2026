package Algorithms.LinearSearch;

import java.util.Scanner;

public class characterSearch {
    static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        String word = "Banana";

        System.out.print("Enter the character you want to search: ");
        char ch = in.next().charAt(0);

        boolean isFound = searchCharacter(word.toLowerCase(), ch);
        if(isFound) System.out.println("Character '"+ch+"' found");
        else System.out.println("Character '"+ch+"' NOT found");
    }
    static boolean searchCharacter(String word, char ch){
        if(word.isEmpty()){
            return false;
        }
        for(int i = 0; i < word.length(); i++){
            if(word.charAt(i) == ch){
                return true;
            }
        }
        return false;
    }
}
