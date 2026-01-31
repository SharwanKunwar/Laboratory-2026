package Interface.Example03;

public interface VehicleControler {

    void start();
    void stop();
    void turnLeft();
    void turnRight();
    void applyBreaks();

    default void horn(){
        System.out.println("Horned");
    }
}
