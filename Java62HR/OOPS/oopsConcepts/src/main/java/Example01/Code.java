package Example01;

// This is where the story begins.
// A lonely main method, forced to exist because Java demands it.
public class Code {
    public static void main(String[] args) {

        // A Human is born… without consent, as usual.
        Human h1 = new Human();

        // We give this poor soul a name.
        h1.name = "sharwan";

        // Now we assign age.
        // Instead of simply using 'this', we pass the human itself.
        // Because apparently identity crisis is part of the design.
//        h1.setAge(20, h1);


        h1.setAge(20);
        // Finally, the human reveals their basic information.
        // The bare minimum of existence.
        h1.display();
    }
}