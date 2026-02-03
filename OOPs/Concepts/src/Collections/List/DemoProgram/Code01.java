package Collections.List.DemoProgram;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import static java.lang.System.exit;

public class Code01 {
    static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        List<String> names = new ArrayList<>();
        boolean track = true;

        do{
            System.out.println("------------------------------------");
            System.out.println("1. Add\t 2. Display");
            System.out.println("0. Exit");
            System.out.println("------------------------------------");
            System.out.print("Enter : ");
            int op = input.nextInt();

            space(40);
            switch (op){
                case 0:
                    track = false;
                    break;
                case 1:
                    System.out.println("names");
                    break;
                case 2:
                    System.out.println("display");
                    break;
            }
        }while (track);
    }
    static void space(int n){
        for(int i=0; i<n; i++){
            System.out.println();
        }
    }
}
