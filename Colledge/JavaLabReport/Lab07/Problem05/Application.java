package JavaLab.Lab07.Problem05;

import JavaLab.Lab07.Problem05.calculator.Add;
import JavaLab.Lab07.Problem05.calculator.Multiplication;
import JavaLab.Lab07.Problem05.calculator.Sub;
import JavaLab.Lab07.Problem05.calculator.div;

public class Application implements Add, Sub, Multiplication, div {

    @Override
    public void add(int a, int b) {
        System.out.println(a + b);
    }

    @Override
    public void sub(int a, int b) {
        System.out.println(a - b);

    }

    @Override
    public void multiplication(int a, int b) {
        System.out.println(a * b);

    }

    @Override
    public void div(int a, int b) {
        System.out.println(a / b);
    }
}
