package Multithreading.DemoThread;

public class Thread02 extends  Thread {
    int count = 0;

    public int getCount() {
        return count;
    }

    @Override
    public void run() {
        for(int i=0;i<100;i++){
            System.out.println("Thread 02 ");
            count++;
        }
    }
}
