// ARRAY WITH AVAILABLE CHOICES
const choices = ["rock", "paper", "scissors"];
let winners = [];
let playerChoice;
let roundNumber = 1;
let playerScore = 0;
let computerScore = 0;

// FUNCTION PLAYING 5 ROUNDS OF GAME
function game() {
  for (let i = 1; i <= 5; i++) {
    playRound(i);
  }
  logWins();
  checkGameWinner();
}

// EVENT LISTENERS FOR BUTTONS
const rock = document.querySelector("#rock").addEventListener("click", () => {
  playerChoice = "rock";
  playRound();
});

const paper = document.querySelector("#paper").addEventListener("click", () => {
  playerChoice = "paper";
  playRound();
});

const scissors = document
  .querySelector("#scissors")
  .addEventListener("click", () => {
    playerChoice = "scissors";
    playRound();
  });

// ASSIGNING VARIABLES TO PLAYER/COMPUTER CHOICE
function playRound(round) {
  const computerSelection = computerChoice();
  const winner = checkWinner(playerChoice, computerSelection);
  winners.push(winner);
  logRound(playerChoice, computerSelection, winner, roundNumber);
  roundNumber++;
  checkGameWinner();
}
// CREATING GAME PROMPT
// function playerChoice() {
//   let input = prompt(
//     "Let's play a game! Type rock, paper, or scissors to choose."
//   );
//   while (input == null) {
//     input = prompt(
//       "Let's play a game! Type rock, paper, or scissors to choose."
//     );
//   }
//   input = input.toLowerCase();
//   let check = validateInput(input);
//   while (check == false) {
//     input = prompt(
//       "Invalid response. You must type rock, paper, or scissors. Capitalization does not matter."
//     );
//     while (input == null) {
//       input = prompt("Type paper, rock, or scissors");
//     }
//     input = input.toLowerCase();
//     check = validateInput(input);
//   }
//   return input;
// }

// RANDOMIZING COMPUTER SELECTION
function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// function validateInput(choice) {
//   return choices.includes(choice);
// }

// FUNCTION TO CHECK THE WINNER
function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Draw!";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    playerScore++;
    return "Player Wins!";
  } else {
    computerScore++;
    return "Computer Wins!";
  }
}

// FUNCTION ADDING TOTAL WINS TO PLAYER
function logWins() {
  let playerWins = winners.filter((item) => item == "Player Wins!").length;
  let computerWins = winners.filter((item) => item == "Computer Wins!").length;
  let ties = winners.filter((item) => item == "Draw!").length;
  console.log("Results:");
  console.log("Player Wins:", playerWins);
  console.log("Computer Wins:", computerWins);
  console.log("Draws:", ties);
}

// LOGGING THE GAME CHOICES/WINNER
function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose:", computerChoice);
  console.log(winner);
  console.log("----------------------------------");
  updateResults(playerChoice, computerChoice, winner, round);
  updateScore();
}

// DOM MANIPULATION TO SHOW RESULTS OF GAME
function updateResults(playerChoice, computerChoice, winner, round) {
  const results = document.querySelector(".results");
  const roundContent = document.createElement("p");
  roundContent.textContent = `Round: ${round} --- Player: ${playerChoice} --- Computer: ${computerChoice} --- Winner: ${winner}`;
  results.appendChild(roundContent);
}

// DOM MANIPULATION TO SHOW GAME SCORE
function updateScore() {
  const scoreDisplay = document.querySelector(".score");
  scoreDisplay.textContent = `Player: ${playerScore} --- Computer: ${computerScore}`;
}

function checkGameWinner() {
  if (playerScore >= 5 || computerScore >= 5) {
    let gameWinner =
      playerScore > computerScore
        ? "Player Wins the Game!"
        : "Computer Wins the Game!";
    const results = document.querySelector(".winner");
    const winnerAnnounce = document.createElement("h2");
    winnerAnnounce.textContent = gameWinner;
    results.appendChild(winnerAnnounce);
  }
}
// CALLING FUNCTION
// game();
// *should only be called with an eventListener in ver2
