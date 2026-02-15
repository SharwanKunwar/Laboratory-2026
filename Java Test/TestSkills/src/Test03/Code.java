package Test03;

// Find max and min from the given array

public class Code {
    public static void main(String[] args) {

        int[] array = {1,5,10};

        int max = array[0];
        int min = array[0];

        for(int i=1; i<array.length; i++){
            if(array[i]> max){
                max = array[i];
            }
            if(array[i] < min){
                min = array[i];
            }
        }
        System.out.println("max:"+max);
        System.out.println("min:"+min);
    }
}
