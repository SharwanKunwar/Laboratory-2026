package JavaLab.Lab07.Problem07.EmployeePackage;

public class Employee {
    private int Eid;
    private String Ename;
    private String Eaddress;
    private double salary;


    @Override
    public String toString() {
        return "Employee{" +
                "Eid=" + Eid +
                ", Ename='" + Ename + '\'' +
                ", Eaddress='" + Eaddress + '\'' +
                ", salary=" + salary +
                '}';
    }

    public Employee(int eid, String ename, String eaddress, double salary) {
        this.Eid = eid;
        this.Ename = ename;
        this.Eaddress = eaddress;
        this.salary = salary;
    }

}
