package PracticeCode;

public class SmallesElement {
    static void main(String[] args) {
        int [] arr = {1,1,2,3,4,5,6};

        int min = Integer.MAX_VALUE;
        int secondMin = Integer.MAX_VALUE;

        for(int i=0; i<arr.length; i++){
            if(arr[i]< min){
                secondMin = min;
                min = arr[i];
            }else if(arr[i] < secondMin && arr[i] != min){
                secondMin = arr[i];
            }
        }
        System.out.println("min "+min);
        System.out.println("second "+secondMin);
    }
}
