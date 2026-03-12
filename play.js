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
    if (humanChoice == "rock") {
        if computerChoice == "scissors" {
            console.log("Human wins!")
        } else if computerChoice == "paper" {
            console.log("Computer wins!")
        } else {
            console.log("It's a tie!")
        }

    } else if (humanChoice == "paper") {
        if computerChoice == "rock" {
            console.log("Human wins!")
        } else if computerChoice == "scissors" {
            console.log("Computer wins!")
        } else {
            console.log("It's a tie!")
        }

    } else if (humanChoice == "scissors") {
        if computerChoice == "paper" {
            console.log("Human wins!")
        } else if computerChoice == "rock" {
            console.log("Computer wins!")
        } else {
            console.log("It's a tie!")
        }
    } else {
        alert("The game couldn't run because of an error!");
    } 
}

let humanScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(humanSelection, computerSelection);