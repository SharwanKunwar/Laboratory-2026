//import edu.cmu.sphinx.api.Configuration;
//import edu.cmu.sphinx.api.LiveSpeechRecognizer;
//import edu.cmu.sphinx.api.SpeechResult;
//
//import java.io.IOException;
//
//public class VoiceNotepad {
//
//    public static void main(String[] args) {
//        try {
//            // 1️⃣ Configure Sphinx
//            Configuration configuration = new Configuration();
//            configuration.setAcousticModelPath("resource:/edu/cmu/sphinx/models/en-us/en-us");
//            configuration.setDictionaryPath("resource:/edu/cmu/sphinx/models/en-us/cmudict-en-us.dict");
//            configuration.setLanguageModelPath("resource:/edu/cmu/sphinx/models/en-us/en-us.lm.bin");
//
//            // 2️⃣ Create recognizer
//            LiveSpeechRecognizer recognizer = new LiveSpeechRecognizer(configuration);
//
//            // 3️⃣ Start microphone listening
//            recognizer.startRecognition(true);
//            System.out.println("Say a command... (Try: 'open notepad')");
//
//            SpeechResult result;
//            while ((result = recognizer.getResult()) != null) {
//                String command = result.getHypothesis();
//                System.out.println("You said: " + command);
//
//                // 4️⃣ Check command
//                if (command.equalsIgnoreCase("open notepad")) {
//                    openNotepad();
//                } else if (command.equalsIgnoreCase("exit")) {
//                    System.out.println("Exiting...");
//                    break;
//                } else {
//                    System.out.println("Command not recognized!");
//                }
//            }
//
//            recognizer.stopRecognition();
//
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }
//
//    // 5️⃣ Method to open Notepad
//    public static void openNotepad() {
//        try {
//            Runtime.getRuntime().exec("notepad");
//            System.out.println("Notepad opened!");
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }
//}
