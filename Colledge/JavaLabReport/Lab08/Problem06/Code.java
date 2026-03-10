package JavaLab.Lab08.Problem06;

// Write a java program to demonstrate the concept of synchronization in multithreaded applications.

class Counter {
    int count = 0;
    // synchronized method
    synchronized void increment() {
        count++;
    }
}

class MyThread extends Thread {

    Counter counter;
    MyThread(Counter counter) {
        this.counter = counter;
    }

    @Override
    public void run() {
        for(int i = 0; i < 1000; i++) {
            counter.increment();
        }
    }
}

public class Code {

    public static void main(String[] args) throws InterruptedException {

        Counter counter = new Counter();

        MyThread t1 = new MyThread(counter);
        MyThread t2 = new MyThread(counter);

        t1.start();
        t2.start();

        t1.join();
        t2.join();

        System.out.println("Final Count: " + counter.count);
    }
}