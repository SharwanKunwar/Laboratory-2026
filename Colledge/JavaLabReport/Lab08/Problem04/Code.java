package JavaLab.Lab08.Problem04;

// Wap to develop multithreaded application by following ways
// a. By implementing Runnable Interface
// b. By extending Thread class.

public class Code {
    public static void main(String[] args) {

        Thread02 t2 = new Thread02();
        t2.start();

        Thread03 t3 = new Thread03();
        t3.run();

        for(int i=0;i<10;i++){
            System.out.println("Main thread: "+Thread.currentThread().getName());
        }
    }
}
