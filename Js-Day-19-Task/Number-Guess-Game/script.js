
        // Computer chooses a random number
        let secretNumber = Math.floor(Math.random() * 10) + 1;
        function checkGuess() {
            // Get the number entered by the user
            let guess = document.getElementById("guess").value;
            // Check the guess
            if (guess == secretNumber) {
                document.getElementById("result").innerText =
                    "🎉 Correct! You guessed the number!🤩🤩";
            }
            else if (guess < secretNumber) {
                document.getElementById("result").innerText =
                    "Your guess is too low!😒😒";
            }
            else {
                document.getElementById("result").innerText =
                    "Your guess is too high!🙃🙃";
            }
        }