package PracticeCode;

// find largest and secondlargest element from the given array

public class largestElement {
    static void main(String[] args) {

        int[] array = {4,5,6,7,8,3,1};

        int max = array[0];
        int secondMax = Integer.MIN_VALUE;

        for(int i=1; i<array.length; i++){
            if(array[i] > max){
                secondMax = max;
                max = array[i];
            }else if(array[i] > secondMax){
                secondMax = array[i];
            }
        }
        System.out.println(max);
        System.out.println(secondMax);

    }
}
