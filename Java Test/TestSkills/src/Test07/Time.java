package Test07;

public class Time {
    int hour;
    int minute;
    int second;

    Time(int hour, int minute, int second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    // Add Time
    public Time add(Time time) {
        int sec = this.second + time.second;
        int min = this.minute + time.minute;
        int hr = this.hour + time.hour;

        // Handle seconds
        min += sec / 60;
        sec = sec % 60;

        // Handle minutes
        hr += min / 60;
        min = min % 60;

        return new Time(hr, min, sec);
    }

    // Subtract Time
    public Time subtract(Time time) {
        int sec = this.second - time.second;
        int min = this.minute - time.minute;
        int hr = this.hour - time.hour;

        // Handle seconds borrow
        if (sec < 0) {
            sec += 60;
            min--;
        }

        // Handle minutes borrow
        if (min < 0) {
            min += 60;
            hr--;
        }

        return new Time(hr, min, sec);
    }

    // Display Time
    public void display() {
        System.out.println(hour + ":" + minute + ":" + second);
    }
}