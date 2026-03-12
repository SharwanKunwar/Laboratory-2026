package JavaLab.Lab08.Problem04;

public class Thread03 implements Runnable{

    public void run() {
        for(int i=0; i<10; i++){
            System.out.println("Thread running using runnable class : "+Thread.currentThread().getName());
        }
    }
}
