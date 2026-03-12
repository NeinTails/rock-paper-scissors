function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    let computerChoice;
    if (choiceNum == 0) {
        computerChoice = "Rock";
    } else if (choiceNum == 1) {
        computerChoice = "Paper";
    } else
        computerChoice = "Scissors";
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

getHumanChoice();