package Test03;

// Find the largest element and second-largest element from the given array

public class Code01 {
    static void main(String[] args) {

        int [] array = {4,5,6,2,3};

        int max = array[0];
        int secondMax = Integer.MAX_VALUE;

        for(int i=1; i<array.length; i++){
            if(array[i] > max){
                secondMax = max;
                max = array[i];
            }else if( array[i] > secondMax && array[i] != max){
                secondMax = array[i];
            }
        }
        System.out.println("Max : "+max);
        System.out.println("SecondMax : "+secondMax);
    }
}
