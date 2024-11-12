const choices = ["rock","paper","scissors"];
let winners = [];

function game() {
    for(let i = 1; i <= 5; i++) {
        playRound(i);
    }
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice () {
    let input = prompt("Let's play a game! Type rock, paper, or scissors to choose.");
    while (input == null) {
        input = prompt("Let's play a game! Type rock, paper, or scissors to choose.");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            "Invalid response. You must type rock, paper, or scissors. Capitalization does not matter."        
    );
    while (input == null) {
        input = prompt("Type paper, rock, or scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
    }
    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random()*3)];
}

function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC) {
        return "Draw!";
    } else if (
        (choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "paper" && choiceC === "rock") ||
        (choiceP === "scissors" && choiceC === "paper")
    ) {     
        return "Player Wins!";
    } else {
        return "Computer Wins!";
    }
}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player Wins!").length;
    let computerWins = winners.filter((item) => item = "Computer Wins!").length;
    let ties = winners.filter((item) => item = "Draw!").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Draws:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round:", round);
    console.log("Player Chose:", playerChoice);
    console.log("Computer Chose:", computerChoice);
    console.log(winner);
    console.log("----------------------------------");
}

game();