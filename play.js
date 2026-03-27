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

let buttons = document.querySelector("div.buttons");
let results = document.querySelector("div.results");

buttons.addEventListener('click', (e) => {
    const button = e.target.closest("button");
    const humanChoice = button.id;

    if(button) {
        playRound(humanChoice, getComputerChoice());
    }
});



function playRound(humanChoice, computerChoice) {
    //TODO: replace with case
    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("Human wins!");
            ++humanScore;
        } else if (computerChoice == "paper") {
            console.log("Computer wins!");
            ++computerScore;
        } else {
            console.log("It's a tie!");
        }

    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("Human wins!");
            ++humanScore;
        } else if (computerChoice == "scissors") {
            console.log("Computer wins!");
            ++computerScore;
        } else {
            console.log("It's a tie!");
        }

    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("Human wins!");
            ++humanScore;
        } else if (computerChoice == "rock") {
            console.log("Computer wins!");
            ++computerScore;
        } else {
            console.log("It's a tie!");
        }
    } else {
        return;
    }
    console.log(`Round ${roundNumber}: Human: ${humanScore}, Computer: ${computerScore}`);
    ++roundNumber;
}



let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

playGame();