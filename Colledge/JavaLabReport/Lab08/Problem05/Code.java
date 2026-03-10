package JavaLab.Lab08.Problem05;

// Write a Java program to set and get thread priorities in a multithreaded application.

public class Code extends Thread {

    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            System.out.println(Thread.currentThread().getName() +
                    " Priority: " + Thread.currentThread().getPriority());
        }
    }

    public static void main(String[] args) {

        Code c = new Code();
        Code c1 = new Code();

        // Setting thread names
        c.setName("Thread-1");
        c1.setName("Thread-2");

        // Setting priorities
        c.setPriority(Thread.MIN_PRIORITY);
        c1.setPriority(Thread.MAX_PRIORITY);

        // Getting priorities
        System.out.println(c.getName() + " Priority: " + c.getPriority());
        System.out.println(c1.getName() + " Priority: " + c1.getPriority());

        // Starting threads
        c.start();
        c1.start();
    }
}