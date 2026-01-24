package Day01_ClassAndOjbect.Example05;

public class Fan {
    String name;
    String brand;
    String color;
    int speed;
    boolean isOn;

    public void turnOn(){
        isOn = true;
    }
    public void turnOff(){
        isOn = false;
    }
    public void showStatus(){
        if(isOn) System.out.println("The fan is on mode.");
        else System.out.println("The fan is off mode.");
    }

}
