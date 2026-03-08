package Multithreading.DemoThread;

public class Thread01 {
    public static void main(String[] args) {
        int count = 0;
        Thread02 t2 = new Thread02();
        t2.start();

        System.out.println("--------------------------------------");

        for(int i=0;i<100;i++){
            System.out.println("Sharwan From the thread one");
            count++;
        }


        System.out.println("----------------------------------");
        System.out.println("main thread count = "+count);
        System.out.println("Second thread count = "+t2.getCount());


    }
}
