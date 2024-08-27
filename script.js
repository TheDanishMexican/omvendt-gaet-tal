window.addEventListener('load', start);

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
    computerNumberGuess();
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
            correctGuess();
            break;
        }
    }
}

function computerNumberGuess(guessType) {
    const guessedNumber = Math.floor(Math.random() * 100);
    const numberHTML = document.querySelector(".computer-guess");
    const guessListHTML = document.querySelector(".guess-list");

    document.querySelector(".button-guess").classList.add("hide");

    numberHTML.innerHTML = `<strong>${guessedNumber}</strong>`;
    if (guessType === "lower") {
        guessListHTML.innerHTML += `<li>My guess ${guessedNumber} was too high</li>`;
    } else if (guessType === "higher") {
        guessListHTML.innerHTML += `<li>My guess ${guessedNumber} was too low</li>`;
    }

    return guessedNumber;
}

function correctGuess() {
    document.querySelector(".correct-guess").classList.remove("hide");
    document.querySelector(".guess-list").innerHTML = "";
}