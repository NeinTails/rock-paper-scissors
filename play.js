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