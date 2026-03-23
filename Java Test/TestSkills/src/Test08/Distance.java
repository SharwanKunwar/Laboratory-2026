package Test08;

public class Distance{
    int feet;
    int inches;

    public Distance(){
        feet = 0;
        inches = 0;
    }
    public Distance(int feet, int inches){
        this.feet = feet;
        this.inches = inches;
    }
    // add distance
    public Distance add(Distance distance){
        int f = this.feet + distance.feet;
        int i = this.inches + distance.inches;

        if(i>=12){
            f+=i/12;
            i = i%12;
        }
        return new Distance(f,i);
    }

    // sub distance
    public  Distance sub(Distance distance){
        int f = this.feet - distance.feet;
        int i = this.inches - distance.inches;

        if(i < 0){
            f-=1;
            i+=12;
        }
        return new Distance(f,i);
    }

    // display distance
    public void display(){
        System.out.println(feet+" : "+inches);
    }
}