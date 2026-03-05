package JavaLab.Lab07.Problem04;

public class Shape {

    public void area(){
        System.out.println("Area of Shape");
    }

}

class Triangle extends Shape {

    int breadth;
    int height;

    public Triangle(int breadth, int height){
        this.breadth = breadth;
        this.height = height;
    }

    @Override
    public void area(){
        System.out.println("Area of Triangle is : "+0.5*(breadth*height));
    }
}

class Rectangle extends Shape {
    int length, width;

    Rectangle(int l, int w){
        this.length = l;
        this.width = w;
    }

    @Override
    public void area(){
        System.out.println("Area of Rectangle is : "+(length*width));
    }
}
