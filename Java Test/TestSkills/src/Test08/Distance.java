package Test08;

public class Distance {
    int feet, inch;

    Distance(){
        feet = 0;
        inch = 0;
    }

    Distance(int feet, int inch) {
        this.feet = feet;
        this.inch = inch;
    }

    // add distance
    public Distance add(Distance distance){

        //
        int f = this.feet+ distance.feet;
        int i = this.inch+ distance.inch;

        //
        if(i>=12){
            f+=i/12;
            i = i%12;
        }
        //
        return new Distance(f,i);
    }

    // sub distance
    public Distance subtract(Distance distance){
        int f = this.feet - distance.feet;
        int i = this.inch - distance.inch;

        if(i<0){
            f-=1;
            i+=12;
        }
        return  new  Distance(f,i);
    }

    // display distance
    public void displayDistance(){
        System.out.println("Feet: " + this.feet+ " Inches: " + this.inch);
    }

}
