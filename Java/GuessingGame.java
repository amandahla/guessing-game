import java.util.Scanner;
import java.util.InputMismatchException;
import java.util.Random;

class GuessingGame {
    public static void main(String args[]) {
        // Using Scanner for Getting Input from User
        Scanner in = new Scanner(System.in);
        int guessNumber;

        Random rand = new Random();
        int secretNumber = rand.nextInt(101);

        while (true) {
            System.out.println("Please input your guess.");

            try {
                guessNumber = in.nextInt();
            } catch (InputMismatchException e) {
                in.nextLine();
                continue;
            }

            System.out.println("You entered integer " + guessNumber);

            if (guessNumber == secretNumber) {
                System.out.println("You win!");
                break;
            }

            if (guessNumber > secretNumber) {
                System.out.println("Too big!");
            } else {
                System.out.println("Too small!");
            }
        }

    }
}