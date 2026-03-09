package Multithreading.Example01;

public class WordToWord  extends Thread{
    String sentence = "The magic you are looking for is in the work you are avoiding.";

    @Override
    public void run() {
        for(int i=0; i<sentence.length(); i++){
            System.out.print(sentence.charAt(i));
            try{
                Thread.sleep(350);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
