package Test02;

public class missingIDException extends RuntimeException {
    public missingIDException(String message) {
        super(message);
    }
}
