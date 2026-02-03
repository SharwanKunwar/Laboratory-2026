package PracticeCode;

public class Anagram {
    static void main(String[] args) {
        String s1 = "abcd";
        String s2 = "abc";
        boolean isAnagram = true;

        int [] freqency = new int[256];

        if(s1.length() != s2.length()){
            System.out.println("Not an Anagram\nbecause The lengths are not equal");
            return;
        }else{
            for(int i = 0; i < s1.length(); i++){
                freqency[s1.charAt(i)]++;
                freqency[s2.charAt(i)]--;
            }
        }
        for(int val: freqency){
            if(val != 0){
                isAnagram = false;
                break;
            }

        }

        System.out.println(isAnagram?"Anagram":"Not Anagram");

    }
}
