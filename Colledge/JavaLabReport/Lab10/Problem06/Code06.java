package JavaLab.Lab10.Problem06;

import javax.swing.*;

public class Code01 {

    public static void main(String[] args) {

        JFrame f = new JFrame("Swing Example");

        // JMenu
        JMenuBar mb = new JMenuBar();
        JMenu menu = new JMenu("File");
        JMenuItem item = new JMenuItem("Exit");
        menu.add(item);
        mb.add(menu);
        f.setJMenuBar(mb);

        // JTable
        String data[][] = {
                {"1","Ram","IT"},
                {"2","Shyam","HR"}
        };
        String col[]={"ID","Name","Dept"};
        JTable table = new JTable(data,col);
        JScrollPane sp = new JScrollPane(table);
        sp.setBounds(20,20,250,80);

        // JDesktopPane + JInternalFrame
        JDesktopPane desktop = new JDesktopPane();
        JInternalFrame internal = new JInternalFrame("Internal Frame",true,true,true,true);
        internal.setSize(200,100);
        internal.setVisible(true);
        desktop.add(internal);
        desktop.setBounds(20,120,250,150);

        f.add(sp);
        f.add(desktop);

        f.setSize(350,350);
        f.setLayout(null);
        f.setVisible(true);
    }
}