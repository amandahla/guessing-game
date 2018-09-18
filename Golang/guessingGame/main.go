package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"strconv"
	"strings"
)

func main() {
	fmt.Println("Guess the number!")

	reader := bufio.NewReader(os.Stdin)

	secretNumber := rand.Intn(101)

	for {
		fmt.Println("Please input your guess.")

		guess, _ := reader.ReadString('\n')

		guessNumber, err := strconv.Atoi(strings.TrimSpace(guess))

		if err != nil {
			continue
		}

		fmt.Println("You guessed: ", guessNumber)

		if guessNumber == secretNumber {
			fmt.Println("You win!")
			break
		}

		if guessNumber > secretNumber {
			fmt.Println("Too big!")
		} else {
			fmt.Println("Too small!")
		}
	}
}
