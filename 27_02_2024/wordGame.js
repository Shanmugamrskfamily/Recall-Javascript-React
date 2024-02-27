const readline = require('readline');

// Function to initialize the game
function initializeGame() {
    console.log("Welcome to the Word Guessing Game!");
    console.log("You have to guess a word by entering one letter at a time.");
    console.log("You have 12 chances to guess the word correctly.\n");

    // Choose a word to guess
    const wordToGuess = "boat";
    let guessedLetters = new Array(wordToGuess.length).fill('_'); // Array to track guessed letters
    let remainingAttempts = 12;

    playGame(wordToGuess, guessedLetters, remainingAttempts);
}

// Function to play the game
function playGame(wordToGuess, guessedLetters, remainingAttempts) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Display word with guessed letters and remaining attempts

    // Prompt user for input
    rl.question('Enter a letter: ', (input) => {
        rl.close();

        // Check if the input is a single letter
        if (input.length !== 1 || !/[a-zA-Z]/.test(input)) {
            console.log("Please enter a single letter.");
            playGame(wordToGuess, guessedLetters, remainingAttempts);
            return;
        }

        const guessedLetter = input.toLowerCase();
        let found = false;

        // Check if the guessed letter matches any letter in the word
        for (let i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === guessedLetter) {
                
                guessedLetters[i] = guessedLetter;
                
                found = true;
            }
        }

        // Update remaining attempts
        
            remainingAttempts--;
            console.log("Remaining attempts: " + remainingAttempts);
        

        // Check if the word is guessed completely
        if (guessedLetters.join('') === wordToGuess) {
            console.log("Congratulations! You guessed the word: " + wordToGuess);
            console.log("You win!");
            process.exit(0);
        }

        // Check if there are remaining attempts
        if (remainingAttempts === 0) {
            console.log("Sorry, you've run out of attempts.");
            console.log("The word was: " + wordToGuess);
            console.log("Game over!");
            process.exit(0);
        }
        
        console.log("Word: " + guessedLetters.join(' '));
        console.log("Remaining attempts: " + remainingAttempts + "\n");

        // Continue playing
        playGame(wordToGuess, guessedLetters, remainingAttempts);
    });
}

// Start the game
initializeGame();
