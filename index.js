// Create variables for the game state
let player1Score = 0;
let player1Tries = 0;
let player2Score = 0;
let player2Tries = 0;
let player1Turn = true;

// Create variables to store references to the necessary DOM nodes
const message = document.querySelector('#message');
const player1Dice = document.querySelector('#player1Dice');
const player2Dice = document.querySelector('#player2Dice');
const player1Scoreboard = document.querySelector('#player1Scoreboard');
const player2Scoreboard = document.querySelector('#player2Scoreboard');
const rollBtn = document.querySelector('#rollBtn');
const resetBtn = document.querySelector('#resetBtn');

// start logic
rollBtn.addEventListener('click', function () {
  rollDice();
  checkWinner();
});

resetBtn.addEventListener('click', resetGame);

// function roll the dice
function rollDice() {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  if (player1Turn) {
    player1Dice.textContent = randomNumber;
    player1Score += randomNumber;

    player1Scoreboard.textContent = player1Score;
    player2Dice.textContent = '-';

    player2Dice.classList.remove('active');
    player1Dice.classList.add('active');
    message.textContent = 'Player 2 Turn';
    player1Tries++;
  } else {
    player2Dice.textContent = randomNumber;
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;
    player1Dice.textContent = '-';

    player1Dice.classList.remove('active');
    player2Dice.classList.add('active');
    message.textContent = 'Player 1 Turn';
    player2Tries++;
  }
  player1Turn = !player1Turn;
}

//check winner function
function checkWinner() {
  if (player1Score >= 20 && player1Score > player2Score && player1Tries === player2Tries) {
    message.textContent = 'Player 1 wins the Game 😊🥳';
    resetDisplayButtons();
  } else if (player2Score >= 20 && player2Score > player1Score) {
    message.textContent = 'Player 2 wins the Game 😊🥳';
    resetDisplayButtons();
  }
}
//function to reset the buttons display
function resetDisplayButtons() {
  resetBtn.style.display = 'block';
  rollBtn.style.display = 'none';
}

// reset the Game function
function resetGame() {
  player1Score = 0;
  player2Score = 0;
  player1Tries = 0;
  player2Tries = 0;
  player1Dice.textContent = '-';
  player2Dice.textContent = '-';
  player1Scoreboard.textContent = '';
  player2Scoreboard.textContent = '';
  player1Turn = true;
  message.textContent = 'Player 1 Turn';
  resetBtn.style.display = 'none';
  rollBtn.style.display = 'block';
  player2Dice.classList.remove('active');
  player1Dice.classList.add('active');
}
