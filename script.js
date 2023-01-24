"use strict";

const getRandomInt = () => Math.floor(Math.random() * 20) + 1;
let randomNumber = getRandomInt();
console.log(randomNumber);

let scoreValue = 20;
let highscore = 0;

const scoreFunction = function () {
    if (scoreValue > 1) {
        scoreValue--;
        document.querySelector(".score").textContent = scoreValue;
    } else {
        scoreValue = 0;
        document.querySelector(".score").textContent = scoreValue;
        document.querySelector(".number").textContent = randomNumber;
        document.querySelector(".message").textContent = "😭 You lost!";
        document.querySelector("body").style.backgroundColor = "#b34767";
        document.querySelector(".number").style.width = "30rem";
    }
};

const buttonFunction = function () {
    if (document.querySelector(".number").textContent === "?") {
        const guessedNumber = Number(document.querySelector(".guess").value);
        if (!guessedNumber) {
            document.querySelector(".message").textContent =
                "⛔ Invalid number";
        } else if (guessedNumber > randomNumber) {
            document.querySelector(".message").textContent = "📈 Too high!";
            scoreFunction();
        } else if (guessedNumber < randomNumber) {
            document.querySelector(".message").textContent = "📉 Too low!";
            scoreFunction();
        } else {
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";
            document.querySelector(".message").textContent =
                "🎉 Correct number!";
            document.querySelector(".number").textContent = randomNumber;
            if (scoreValue > highscore) {
                highscore = scoreValue;
                document.querySelector(".highscore").textContent = highscore;
            }
        }
    }
};

const resetFunction = function () {
    document.querySelector(".guess").value = "";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = "20";
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    randomNumber = getRandomInt();
    console.log(randomNumber);
};

document.querySelector(".check").addEventListener("click", buttonFunction);
document.querySelector(".again").addEventListener("click", resetFunction);
