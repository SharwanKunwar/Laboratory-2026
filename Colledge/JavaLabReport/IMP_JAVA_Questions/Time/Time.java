package JavaLab.IMP_JAVA_Questions.Time;

class Time {
    int hours, minutes, seconds;

    // Constructor
    Time(int h, int m, int s) {
        hours = h;
        minutes = m;
        seconds = s;
    }

    // Add time
    Time add(Time t) {
        int h = hours + t.hours;
        int m = minutes + t.minutes;
        int s = seconds + t.seconds;

        if (s >= 60) {
            m += s / 60;
            s = s % 60;
        }

        if (m >= 60) {
            h += m / 60;
            m = m % 60;
        }

        return new Time(h, m, s);
    }

    // Subtract time
    Time subtract(Time t) {
        int h = hours - t.hours;
        int m = minutes - t.minutes;
        int s = seconds - t.seconds;

        if (s < 0) {
            s += 60;
            m--;
        }

        if (m < 0) {
            m += 60;
            h--;
        }

        return new Time(h, m, s);
    }

    // Display time
    void display() {
        System.out.println(hours + ":" + minutes + ":" + seconds);
    }
}