package Random.DistanceCalculation;

public class Distance{
    int feet;
    int inch;

    Distance(){
        feet = 0;
        inch = 0;
    }
    Distance(int feet, int inch){
        this.feet = feet;
        this.inch = inch;
    }

    // add distance
    public Distance add(Distance d){
        int f = this.feet + d.feet;
        int i = this.inch + d.inch;

        if(i >= 12){
            f+=i/12;
            i = i%12;
        }
        return new Distance(f,i);
    }

    // sub distance
    public Distance sub(Distance d){
        int f = this.feet - d.feet;
        int i = this.inch - d.inch;
        if(i<0){
            f-=1;
            i+=12;
        }
        return new Distance(f,i);
    }

    // display
    public void displayDistance(){
        System.out.println(feet + " : " + inch);
    }

}