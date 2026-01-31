package Interface.Example01;

// Team B
public interface carControls {

    void turnRight();
    void turnLeft();
    void applyBreaks();

    // can make method with definition using default
    default void horn(){
        System.out.println("horned");
    }
}
