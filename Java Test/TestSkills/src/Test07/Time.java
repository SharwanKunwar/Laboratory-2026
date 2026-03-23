package Test07;

public class Time {
    int hour;
    int minute;
    int second;

    public Time(int hour, int minute, int second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    // add time
    public Time add(Time time){
        int h = this.hour + time.hour;
        int m = this.minute + time.minute;
        int s = this.second + time.second;

        // handle second
        m+= s/60;
        s = s%60;

        // handle minute
        h+=m/60;
        m=m%60;

        return new Time(h,m,s);
    }

    // sub time
    public Time subtract(Time time){
        int h = this.hour - time.hour;
        int m = this.minute - time.minute;
        int s = this.second - time.second;

        // handle second
        if(s<0){
            s+=60;
            m--;
        }
        // handle minute
        if(m<0){
            m+=60;
            h--;
        }
        return new  Time(h,m,s);
    }
    // display time
    public void displayTime(){
        System.out.println(hour+":"+minute+":"+second);
    }
}