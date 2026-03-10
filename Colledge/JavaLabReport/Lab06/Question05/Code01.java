package JavaLab.Lab06.Question05;

class Time {

    private int hours;
    private int minutes;
    private int seconds;

    // Constructor
    Time(int h, int m, int s) {
        hours = h;
        minutes = m;
        seconds = s;
    }

    // Method to display time
    void displayTime() {
        System.out.println(hours + ":" + minutes + ":" + seconds);
    }

    // Method to add two time objects
    Time addTime(Time t) {

        int sec = this.seconds + t.seconds;
        int min = this.minutes + t.minutes;
        int hr = this.hours + t.hours;

        if (sec >= 60) {
            min += sec / 60;
            sec = sec % 60;
        }

        if (min >= 60) {
            hr += min / 60;
            min = min % 60;
        }

        return new Time(hr, min, sec);
    }

    // Method to subtract two time objects
    Time subtractTime(Time t) {

        int sec = this.seconds - t.seconds;
        int min = this.minutes - t.minutes;
        int hr = this.hours - t.hours;

        if (sec < 0) {
            sec += 60;
            min--;
        }

        if (min < 0) {
            min += 60;
            hr--;
        }

        return new Time(hr, min, sec);
    }
}

public class Code01 {

    public static void main(String[] args) {

        Time t1 = new Time(5, 40, 30);
        Time t2 = new Time(2, 20, 50);

        Time sum = t1.addTime(t2);
        Time diff = t1.subtractTime(t2);

        System.out.print("Time 1: ");
        t1.displayTime();

        System.out.print("Time 2: ");
        t2.displayTime();

        System.out.print("Added Time: ");
        sum.displayTime();

        System.out.print("Subtracted Time: ");
        diff.displayTime();
    }
}