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

function getHumanChoice() {
    humanChoice = prompt("Choose: Rock, paper scissors?", "");
    
    if (humanChoice != null) {
        humanChoice = humanChoice.toLowerCase();
    } else {
        return;
    }

    if (humanChoice == "rock") {
        return humanChoice;
    } else if (humanChoice == "paper") {
        return humanChoice;
    } else if (humanChoice == "scissors") {
        return humanChoice;
    } else {
        alert(`Invalid choice! "${humanChoice}" doesn't make any sense!`);
    }
}

function playRound(humanChoice, computerChoice) {

    (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            outcome = "Human wins!";
            ++humanScore;
        } else if (computerChoice == "paper") {
            outcome = "Computer wins!";
            ++computerScore;
        } else {
            outcome = "It's a tie!";
            roundNumber--;
        }

    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            outcome = "Human wins!";
            ++humanScore;
        } else if (computerChoice == "scissors") {
            outcome = "Computer wins!";
            ++computerScore;
        } else {
            outcome = "It's a tie!";
            roundNumber--;
        }

    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            outcome = "Human wins!";
            ++humanScore;
        } else if (computerChoice == "rock") {
            outcome = "Computer wins!";
            ++computerScore;
        } else {
            outcome = "It's a tie!";
            break 
        }
    } else {
        return;
    }
    gameStatus = `Round ${roundNumber}: Human: ${humanScore}, Computer: ${computerScore}`;
    ++roundNumber;
}

let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;
let gameStatus;
let outcome = "";

let buttons = document.querySelector("div.buttons");
let currentScore = document.querySelector("#score");
let roundOutcome = document.querySelector("#outcome");

buttons.addEventListener('click', (e) => {
    const button = e.target.closest("button");
    const humanChoice = button.id;

    if(button && roundNumber <= 5) {
        playRound(humanChoice, getComputerChoice());
        currentScore.textContent = gameStatus;
        roundOutcome.textContent = outcome;
        }

    if (roundNumber === 6) {
        let gameWinner;
        if (humanScore > computerScore) {
            gameWinner = "Human";
        } else if (computerScore > humanScore) {
            gameWinner = "Computer";
        }
        roundOutcome.textContent = `Game ended! ${gameWinner} is the winner!`;
    }

});