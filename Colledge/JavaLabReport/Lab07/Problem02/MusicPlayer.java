package JavaLab.Lab07.Problem02;

// Multiple Inheritance

public interface MusicPlayer {
    public void play();
    public void pause();
}

// bus class implement musicPlayer
class bus implements MusicPlayer {
    @Override
    public void play() {
        System.out.println("car play");
    }

    @Override
    public void pause() {
        System.out.println("car pause");
    }
}

// mobile class implements same musicPlayer also
class mobile implements MusicPlayer {
    @Override
    public void play() {
        System.out.println("mobile play");
    }
    @Override
    public void pause() {}
}

