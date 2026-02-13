package PracticeCode;

public class largestElement {
    static void main(String[] args) {
        int[] num = {4,2,8,6};

        int max = num[0];
        int secondLargest = Integer.MIN_VALUE;

        for(int i=1; i<num.length; i++){
            if(num[i] > max){
                secondLargest = max;
                max = num[i];
            }else if(num[i] > secondLargest){
                secondLargest = num[i];
            }
        }

        System.out.println("The largest element is "+max);
        System.out.println("The second largest element is "+secondLargest);
    }
}
