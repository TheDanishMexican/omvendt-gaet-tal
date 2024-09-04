window.addEventListener('load', start);

let guessCount = 0;

function start() {
    console.log("The guesser has started up.");
    addButtonEventListeners();
}

function addButtonEventListeners() {
    const buttonLower = document.querySelector(".button-lower");
    const buttonHigher = document.querySelector(".button-higher");
    const buttonCorrect = document.querySelector(".button-correct");
    const buttonGuess = document.querySelector(".button-guess");
    const buttonReset = document.querySelector(".reset-button");

    buttonLower.addEventListener("click", onButtonLowerClick);
    buttonHigher.addEventListener("click", onButtonHigherClick);
    buttonCorrect.addEventListener("click", onButtonCorrectClick);
    buttonGuess.addEventListener("click", onButtonGuessClick);
    buttonReset.addEventListener("click", onButtonResetClick);
}

function removeButtonEventListeners() {
    const buttonLower = document.querySelector(".button-lower");
    const buttonHigher = document.querySelector(".button-higher");
    const buttonCorrect = document.querySelector(".button-correct");
    const buttonGuess = document.querySelector(".button-guess");
    const buttonReset = document.querySelector(".reset-button");

    buttonLower.removeEventListener("click", onButtonLowerClick);
    buttonHigher.removeEventListener("click", onButtonHigherClick);
    buttonCorrect.removeEventListener("click", onButtonCorrectClick);
    buttonGuess.removeEventListener("click", onButtonGuessClick);
    buttonReset.removeEventListener("click", onButtonResetClick);
}

function onButtonLowerClick(event) {
    buttonClicked(document.querySelector(".button-lower"), event);
}

function onButtonHigherClick(event) {
    buttonClicked(document.querySelector(".button-higher"), event);
}

function onButtonCorrectClick(event) {
    buttonClicked(document.querySelector(".button-correct"), event);
}

function onButtonGuessClick() {
    computerNumberGuess("start");
}

function onButtonResetClick() {
    removeButtonEventListeners();

    location.reload();
}

function buttonClicked(buttonType, event) {
    event.preventDefault();

    switch (buttonType.className) {
        case "button-lower": {
            computerNumberGuess("lower");
        } break;
        case "button-higher": {
            computerNumberGuess("higher");
            break;
        } case "button-correct": {
            correctGuess(guessCount);
            break;
        }
    }
}

function computerNumberGuess(guessType) {
    const guessedNumber = Math.floor(Math.random() * 100);
    const numberHTML = document.querySelector(".computer-guess");
    const guessListHTML = document.querySelector(".guess-list");

    document.querySelector(".button-guess").classList.add("hide");

    switch (guessType) {
        case "start":
            numberHTML.innerHTML = `<strong>${guessedNumber}</strong>`;
            guessCount++;
            break;
        case "lower":
            guessListHTML.innerHTML += `<li>My guess ${guessedNumber} was too high</li>`;
            guessCount++;
            break;
        case "higher":
            guessListHTML.innerHTML += `<li>My guess ${guessedNumber} was too low</li>`;
            guessCount++;
            break;
    }

    return guessedNumber;
}

function correctGuess(guessCount) {
    document.querySelector(".guess-list").innerHTML = "";
    const correctGuessMessageDiv = document.querySelector(".correct-guess");
    const correctGuessMessage = document.querySelector(".correct-guess-text");

    correctGuessMessageDiv.classList.remove("hide");

    switch (guessCount) {
        case 1:
            correctGuessMessage.innerHTML = `Excellent, I only used ${guessCount} guess!`;
            break;
        case 2:
            correctGuessMessage.innerHTML = `Great, I only used ${guessCount} guesses!`;
            break;
        case 3:
            correctGuessMessage.innerHTML = `Good, I only used ${guessCount} guesses!`;
            break;
        case 4:
            correctGuessMessage.innerHTML = `Not bad, I used ${guessCount} guesses!`;
            break;
        case 5:
            correctGuessMessage.innerHTML = `Bad, I used ${guessCount} guesses!`;
            break;
        case 6:
            correctGuessMessage.innerHTML = `Very bad, I used ${guessCount} guesses!`;
            break;
        case 7:
            correctGuessMessage.innerHTML = `Terrible, I used ${guessCount} guesses!`;
            break;
    }
}