package Test03;

// Find min and second min from the given array.

public class Code02 {
    public static void main(String[] args) {

        int[] array = {10,50,30,3};

        int min = array[0];
        int secondMin = Integer.MAX_VALUE;

        if(array.length < 2){
            System.out.println("No second min exists");
            return;
        }

        for(int i=1; i<array.length; i++){

            if(array[i] < min){
                secondMin = min;
                min = array[i];
            } else if(array[i] < secondMin && array[i] != min){
                secondMin = array[i];
            }

        }

        if(secondMin == Integer.MAX_VALUE){
            System.out.println("No second-Min exists");
        }else{
            System.out.println("min:"+min);
            System.out.println("secondMin:"+secondMin);
        }


    }
}
