package PracticeCode;

public class code003 {
    public static void main(String[] args) {
        String str01 = "abc";
        String str02 = "abd";

        if (str01.length() != str02.length()) {
            System.out.println("The lengths are not equal");
            return;
        }

        int[] freq = new int[256]; // ASCII character count

        for (int i = 0; i < str01.length(); i++) {
            freq[str01.charAt(i)]++;   // increment for str01
            freq[str02.charAt(i)]--;   // decrement for str02
        }
        boolean isAnagram = true;
        for (int count : freq) {
            if (count != 0) {
                isAnagram = false;
                break;
            }
        }
        System.out.println(isAnagram ? "Anagram" : "Not Anagram");
    }
}
