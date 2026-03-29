package org.example.JavaNumberPrograms;

// Abstract class: promises work but does none.
// Classic management behavior.
abstract public class RamboCanDo {

    // This method must be implemented by subclasses.
    // Responsibility successfully outsourced 😒.
    abstract public void processFibonacci(int num);
    abstract public void playMusic();
    abstract public void shutdown() throws InterruptedException;
    abstract public void TestMe() throws InterruptedException;
    abstract public void checkPrime(int num);
    abstract public void primeFactors(int num);
    abstract public void reverseNumber(int num);
    abstract public void sumDigit(int digit);
}