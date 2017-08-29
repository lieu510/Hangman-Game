    //Creates array for game words.
    var gameWords = ["coinbase", "ethereum", "litecoin"];
    
    //Selects elements to display stats.
    var user = document.getElementById("user");
    var wins = document.getElementById("wins");
    var losses = document.getElementById("losses");
    var guesses = document.getElementById("guesses");
    var word = document.getElementById("word");
    var status = document.getElementById("status");
    //Tracks guesses, wins and losses
    var winCount = 0;
    var lossCount = 0;
    var round = 0;
    var guessCount = 15;
    // Creates an array that lists guessed letters.
    var userGuessed = [];
    var correctLetters = ["_","_","_","_","_","_","_","_"];
    word.textContent = "_ _ _ _ _ _ _ _";

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

        if (round < 3) {

            //Sets current word based on round number.
            var currentWord = gameWords[round];

            if (guessCount > 0) {
                
                // Determines which key was pressed and adds to array.
                var userGuess = event.key;
                    
                // for (var i = 0; i < userGuessed.length; i++) {
                //     if (userGuess == userGuessed[i]) {

                //         alert("You've already guessed this letter!");
                //     } else {
                    
                        userGuessed.push(userGuess);
                        user.textContent = userGuessed;
                        //Checks user's guess against letters in current word.
                        for (var i = 0; i < currentWord.length; i++) {
                            if (userGuess == currentWord[i]) {
                                correctLetters[i] = currentWord[i];
                                var displayLetters = correctLetters[0] + " " + correctLetters[1] + " " + correctLetters[2] + " " + correctLetters[3] + " " + correctLetters[4] + " " + correctLetters[5] + " " + correctLetters[6] + " " + correctLetters[7];
                                word.textContent = displayLetters;
                            }
                        }
                        guessCount--
                        guesses.textContent = guessCount;
                    //}
                //}
            }
            //Checks if all letters in current word have been guessed (win). 
            if (correctLetters[0] + correctLetters[1] + correctLetters[2] + correctLetters[3] + correctLetters[4] + correctLetters[5] + correctLetters[6] + correctLetters[7] == currentWord) {
                winCount++
                wins.textContent = winCount;
                round++
                
                correctLetters = ["_","_","_","_","_","_","_","_"];
                userGuessed = [];
                user.textContent = userGuessed;
                word.textContent = "_ _ _ _ _ _ _ _";
                // for ( var i = 0; i< currentWord.length; i++) {
                //     correctLetters.push("_");
                // }
                guessCount = 15;
                guesses.textContent = guessCount;
            } else if (guessCount == 0) {
                lossCount++
                losses.textContent = lossCount;
                round++
                
                correctLetters = ["_","_","_","_","_","_","_","_"];
                userGuessed = [];
                user.textContent = userGuessed;
                word.textContent = "_ _ _ _ _ _ _ _";
                // for ( var i = 0; i< currentWord.length; i++) {
                //     correctLetters.push("_");
                // }
                guessCount = 15;
                guesses.textContent = guessCount;
            }
        
        } else {
            status.textContent = "Game Over";
        }
    };
