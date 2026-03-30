function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    let computerChoice;
    if (choiceNum == 0) {
        computerChoice = "rock";
    } else if (choiceNum == 1) {
        computerChoice = "paper";
    } else
        computerChoice = "scissors";
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            outcome = "Human wins!";
            ++humanScore;
            ++roundNumber;
        } else if (computerChoice == "paper") {
            outcome = "Computer wins!";
            ++computerScore;
            ++roundNumber;
        } else {
            outcome = "It's a tie!";
        }

    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            outcome = "Human wins!";
            ++humanScore;
            ++roundNumber;
        } else if (computerChoice == "scissors") {
            outcome = "Computer wins!";
            ++computerScore;
            ++roundNumber;
        } else {
            outcome = "It's a tie!";
        }

    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            outcome = "Human wins!";
            ++humanScore;
            ++roundNumber;
        } else if (computerChoice == "rock") {
            outcome = "Computer wins!";
            ++computerScore;
            ++roundNumber;
        } else {
            outcome = "It's a tie!";
        }
    }

    gameStatus = `Round ${roundNumber}: Human: ${humanScore}, Computer: ${computerScore}`;
}

let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
let gameStatus;
let outcome = "";

let buttons = document.querySelector("div.buttons");
let currentScore = document.querySelector("#score");
let roundOutcome = document.querySelector("#outcome");

buttons.addEventListener('click', (e) => {
    const button = e.target.closest("button");
    const humanChoice = button.id;

    if(button && roundNumber < 5) {
        playRound(humanChoice, getComputerChoice());
        currentScore.textContent = gameStatus;
        roundOutcome.textContent = outcome;
        }

    if (roundNumber === 5) {
        let gameWinner;
        if (humanScore > computerScore) {
            gameWinner = "Human";
        } else if (computerScore > humanScore) {
            gameWinner = "Computer";
        } else {
            gameWinner = "No one";
        }
        roundOutcome.textContent = `Game ended! ${gameWinner} is the winner!`;
    }

});