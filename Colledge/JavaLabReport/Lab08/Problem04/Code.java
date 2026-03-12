package JavaLab.Lab08.Problem04;

// Wap to develop multithreaded application by following ways
// a. By implementing Runnable Interface
// b. By extending Thread class.

public class Code {
    public static void main(String[] args) {

        // implementing Thread
        Thread02 t2 = new Thread02();
        t2.start();

        // implementing Runnable
        Thread03 t3 = new Thread03(t2);
        t3.start();

        for(int i=0;i<10;i++){
            System.out.println("Main thread: "+Thread.currentThread().getName());
        }
    }
}
