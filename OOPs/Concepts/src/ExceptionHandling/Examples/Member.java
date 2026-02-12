package ExceptionHandling.Examples;

public class Member {
    private String name = null;
    private String sentence;
    private int age;



    Member(String name, int age) throws BuzzWordException{
        this.name = name;
        this.age = age;
    }
    Member(int age){
        this.age = age;
        this.name = null;
    }

    public String getName() throws invalidMemberException{
        if(this.name == null){
            throw new invalidMemberException("Member name is invalid bithc ");
        }
        return name;
    }
    public int getAge() {
        return age;
    }
    public void setSentence(String sentence) throws BuzzWordException{
        String hold = sentence.toUpperCase();
        if(hold.contains("FUCKING")){
            String newWord = hold.replaceAll("FUCKING","*******");
            this.sentence = newWord;
            throw new BuzzWordException("This sentence contain Buzz/F words");
        }else {
            this.sentence = sentence;
        }
    }

    public String getSentence(){
        return sentence;
    }
}
