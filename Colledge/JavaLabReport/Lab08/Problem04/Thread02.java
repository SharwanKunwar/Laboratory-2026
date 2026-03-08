package JavaLab.Lab08.Problem04;

public class Thread02 extends Thread{
    @Override
   public void run(){
        for(int i=0;i<10;i++){
            System.out.println("Thread running using Thread : "+Thread.currentThread().getName());
        }
    }
}
