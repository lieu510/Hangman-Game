    //Creates array for game words.
    var gameWords = ["bitcoin", "ethereum", "litecoin"];
    //Selects elements to display stats.
    var user = document.getElementById("user");
    var wins = document.getElementById("wins");
    var losses = document.getElementById("losses");
    var guesses = document.getElementById("guesses");
    var word = document.getElementById("word");
    //Tracks guesses, wins and losses
    var winCount = 0;
    wins.textContent = winCount;
    var lossCount = 0;
    losses.textContent = lossCount;
    var guessCount = 15;
    //Tracks round number and sets current word.
    var round = 0;
    var currentWord = gameWords[round];
    // Creates an array that lists guessed letters.
    var userGuessed = [];
    //Sets number of blanks based on current word.
    var correctLetters = [];
    for (var i = 0; i < currentWord.length; i++) {

        correctLetters.push("_");
    
    }
    word.textContent = correctLetters.join(" ");

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

        if (round < gameWords.length) {

            if (guessCount > 0) {
                
                // Determines which key was pressed and adds to array.
                var userGuess = event.key;
                    
                if (userGuessed.includes(userGuess)) {

                    alert("You've already guessed this letter!");

                } else {
                    
                    userGuessed.push(userGuess);
                    user.textContent = userGuessed;
                    //Checks user's guess against letters in current word.
                    for (var i = 0; i < currentWord.length; i++) {
                        if (userGuess == currentWord[i]) {
                            correctLetters[i] = currentWord[i];
                            //var displayLetters = correctLetters[0] + " " + correctLetters[1] + " " + correctLetters[2] + " " + correctLetters[3] + " " + correctLetters[4] + " " + correctLetters[5] + " " + correctLetters[6] + " " + correctLetters[7];
                            
                            word.textContent = correctLetters.join(" ");
                        }
                    }
                    guessCount--
                    guesses.textContent = guessCount;
                    
                }
            }
            //Checks if all letters in current word have been guessed (win). 
            if (correctLetters.join("") == currentWord) {
                alert("Great Job!");
                winCount++
                wins.textContent = winCount;
                round++
                if (round < gameWords.length) {
                    //Sets current word based on round number.
                    currentWord = gameWords[round];
                    //Reset round.
                    userGuessed = [];
                    user.textContent = userGuessed;
                    guessCount = 15;
                    guesses.textContent = guessCount;
                    correctLetters = [];
                    //Sets number of blanks based on current word.
                    for (var i = 0; i < currentWord.length; i++) {

                        correctLetters.push("_");
                    
                    }
                    word.textContent = correctLetters.join(" ");
                    document.getElementById("icon").innerHTML = "<h3 id='hint'>HINT</h3>";
                    
                } else {
                    document.getElementById("status").innerHTML = "Game Over";
                }
            //Checks if there are no more guesses (loss).
            } else if (guessCount == 0) {
                alert("The coin was: " + currentWord);
                lossCount++
                losses.textContent = lossCount;
                round++
                if (round < gameWords.length) {
                    //Sets current word based on round number.
                    currentWord = gameWords[round];
                    //Reset round.
                    userGuessed = [];
                    user.textContent = userGuessed;
                    guessCount = 15;
                    guesses.textContent = guessCount;
                    correctLetters = [];
                    //Sets number of blanks based on current word.
                    for (var i = 0; i < currentWord.length; i++) {

                        correctLetters.push("_");
                    
                    }
                    word.textContent = correctLetters.join(" ");
                    document.getElementById("icon").innerHTML = "<h3 id='hint'>HINT</h3>";
                } else {
                    document.getElementById("status").innerHTML = "Game Over";
                }
            }
        
        } 

    };

    //This function runs when hint is clicked.
    var icon = document.getElementById("icon");
    icon.onclick = function() {
        icon.innerHTML = "<img src='assets/images/" + currentWord + ".png'>";
    }