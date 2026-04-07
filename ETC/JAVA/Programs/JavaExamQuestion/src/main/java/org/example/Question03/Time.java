package org.example.Question03;

public class Time {
    int hour;
    int minute;
    int second;

    // constructor
    public Time(int hour, int minute, int second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    // add method to adding two time object
    public Time add(Time time) {
        int newHour = this.hour + time.hour;
        int newMinute = this.minute + time.minute;
        int newSecond = this.second + time.second;

        // handle second
        newMinute += newSecond/60;
        newSecond = newSecond%60;

        // handle minute
        newHour += newMinute/60;
        newMinute = newMinute%60;

        return new Time(newHour, newMinute, newSecond);
    }


    // subtract method to subtract two time object
    public Time subtract(Time time) {
        int newHour = this.hour - time.hour;
        int newMinute = this.minute - time.minute;
        int newSecond = this.second - time.second;

        // handle second
        if(newSecond<0){
            newSecond +=60;
            newMinute--;
        }

        // handle minute
        if(newMinute<0){
            newMinute +=60;
            newHour--;
        }
        return new Time(newHour, newMinute, newSecond);
    }


    // display
    public void displayTime(){
        System.out.println(hour+" : "+minute+" : "+second);
    }
}
