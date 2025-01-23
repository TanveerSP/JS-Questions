let randomNum = parseInt(Math.random() * 100 + 1);
console.log(randomNum);

const form = document.querySelector("form");
const submitbtn = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessesSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultPraas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submitbtn.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGame(guess);
  });
}

function validateGame(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
  } else if (guess < 1) {
    alert("Please enter a number greater than or equal to 1.");
  } else if (guess > 100) {
    alert("Please enter a number less than or equal to 100.");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGusses(guess);
      displayMessage(`Game Over. The random number was ${randomNum}`);
      endGame();
    } else {
      displayGusses(guess);
      checkGuesse(guess);
    }
  }
}

function checkGuesse(guess) {
  if (guess === randomNum) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`Number is TOO low`);
  } else if (guess > randomNum) {
    displayMessage(`Number is TOO high`);
  }
}

function displayGusses(guess) {
  userInput.value = "";
  guessesSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);

  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", function () {
    resetGame();
  });

  playGame = false;
}

function resetGame() {
  randomNum = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;
  guessesSlot.innerHTML = "";
  remaining.innerHTML = `${10}`;
  userInput.removeAttribute("disabled");
  startOver.removeChild(p);
  lowOrHi.innerHTML = "";
  playGame = true;
}

function endGame() {
  newGame();
}
