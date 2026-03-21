package Random.Trick01;

public class Code {
    public static void main(String[] args) {
        int num1 = 0b1010; //binary
        int num2 = 0x7b;  // hex
        System.out.println(num1);
        System.out.println(num2);

        // literals
        int num3 = 10_00_00_000;
        System.out.println(num3);

        double num4 = 12e10;
        System.out.println(num4);

        //
        char holdAfpha = 'a';
        holdAfpha++;
//        System.out.println(holdAfpha);

        //
        char alphabet = 'a';
        for(int i=1; i<=26; i++){
            System.out.println(alphabet);
            alphabet++;
        }


    }
}
