package org.example.Question02;

public class Distance {
    private int feet;
    private int inches;

    public Distance(int feet, int inches) {
        this.feet = feet;
        this.inches = inches;
    }

    // add distance
    public Distance add(Distance distance) {
        int feet = this.feet + distance.feet;
        int inches = this.inches + distance.inches;

        feet+=inches/12;
        inches = inches%12;

        return new Distance(feet,inches);
    }


    // sub distance
    public Distance subtract(Distance distance) {
        int feet = this.feet - distance.feet;
        int inches = this.inches - distance.inches;

        if(inches < 0){
            feet -= 1;
            inches +=12;
        }
        return new Distance(feet,inches);
    }


    // display distance
    public void displayDistance(){
        System.out.println(feet + " " + inches);
    }

}
