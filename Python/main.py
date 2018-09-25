import random

secretNumber = random.randint(1, 101)

while(True):
    print("Secret number: ", secretNumber)
    guessNumber = input("Please input your guess.\n")
    if not guessNumber.isdigit():
        continue
    print("You guessed: ", guessNumber)

    guessNumber = int(guessNumber)

    if guessNumber == secretNumber:
        print("You win!")
        break

    if guessNumber > secretNumber:
        print("Too big!")
    else:
        print("Too small!")
