package JavaLab.Practice.interfaceb;

public interface MusicPlayer {
    void play();
    void pause();
    void stop();
}



// interface 02
 interface sportify{
    void play(int c);
    void pause();

}


class phone implements MusicPlayer,sportify {

    String name;
    long number;

    public  phone(String name, long number) {
        this.name = name;
        this.number = number;
    }

    @Override
    public void play() {
        System.out.println( name+" play");
    }

    @Override
    public void play(int c) {
        System.out.println( name+" play");
    }

    @Override
    public void pause() {
        System.out.println(name + " paused");
    }

    @Override
    public void stop() {
        System.out.println(name + " stopped");
    }
}
