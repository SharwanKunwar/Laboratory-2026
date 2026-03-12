package JavaLab.Lab08.Problem04;

// Wap to develop multithreaded application by following ways
// a. By implementing Runnable Interface
// b. By extending Thread class.

public class Code {
    public static void main(String[] args) {

        // Using Thread class
        Thread02 t2 = new Thread02();
        t2.start();

        // Using Runnable interface
        Thread03 t3 = new Thread03();
        Thread t = new Thread(t3);
        t.start();

        for(int i=0;i<10;i++){
            System.out.println("Main thread: " + Thread.currentThread().getName());
        }
    }
}
