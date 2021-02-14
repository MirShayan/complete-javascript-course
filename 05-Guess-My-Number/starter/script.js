'use strict';
/* 
//PROJECT #1 Guess My Number!
let secretnNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
    const guessedValue = Number(document.querySelector(".guess").value);
    // When there is no input value
    if (!guessedValue) {
        displayMessage("⛔ No number!");
    }
    // When player wins
    else if (guessedValue === secretnNumber) {
        playerWins();
        checkHighscore();
        // When guess is wrong
    } else if (guessedValue !== secretnNumber) {
        if (score > 1) {
            displayMessage((guessedValue > secretnNumber) ? "📈 Too high!" : "📉 Too low!");
            decreaseScore();
        }
        else gameOver();
    }
    //  else if (guessedValue > secretnNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "📈 Too high!";
    //         decreaseScore();
    //     } else {
    //         gameOver();
    //     }
    // When guess is wrong
    // } else if (guessedValue < secretnNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "📉 Too low!";
    //         decreaseScore();
    //     }
    //     else {
    //         gameOver();
    //     }
    // }

});

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

function playerWins() {
    displayMessage("🎉 Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretnNumber;
    document.querySelector(".number").style.width = "30rem";
}

function decreaseScore() {
    score--;
    document.querySelector(".score").textContent = score;
}

function checkHighscore() {
    if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
    }
}

function gameOver() {
    displayMessage("💣💥  Game over!");
    document.querySelector(".score").textContent = 0;
}

// Again button
document.querySelector(".again").addEventListener("click", function () {
    displayMessage("Start guessing...");
    secretnNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number").textContent = "?";
    score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});
 */