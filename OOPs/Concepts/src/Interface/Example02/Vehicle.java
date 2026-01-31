package Interface.Example02;

public interface Vehicle {

    void start();
    void stop();
    void turnLeft();
    void turnRight();
    void applyBreaks();
    default void horn(){
        System.out.println("Horned");
    }
}
