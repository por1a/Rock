function getComputerChoice() {
    let computerChoice = "Unchosen"
    randomNum = Math.floor((Math.random() * 3) + 1);
    if (randomNum === 1) {
        computerChoice = "rock";

    } else if (randomNum === 2) {
        computerChoice = "paper";

    } else if (randomNum === 3) {
        computerChoice = "scissor";
    }
    return computerChoice;
}

function getHumanChoice() {
    let condition = 1;
    let humanChoice;
    while (condition === 1) {
        humanChoice = prompt("Rock paper or scissor?: ").toLowerCase().trim();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissor") {
            condition = 0;
        } else {
            alert("Input is not rock, paper or scissors.")
        }
    } 
    return humanChoice;
}

let humanScore = 0, computerScore = 0;

function playRound(computerChoice, humanChoice) {
    let endMessage = "";
    if (humanChoice === computerChoice) {
        endMessage = `Computer chose ${computerChoice}! It was a tie!`;
        humanScore += 0.5;
        computerScore += 0.5;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        endMessage = `Computer wins with ${computerChoice}!`;
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
        endMessage = `Computer wins with ${computerChoice}!`; 
        computerScore++;
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
        endMessage = `Computer wins with ${computerChoice}!`;
        computerScore++;
    } else {
        endMessage = `Human's ${humanChoice} won against computer's ${computerChoice}!`;
        humanScore++;
    }
    return endMessage
}   

function playGame() { 
    for (let rounds = 0; rounds < 5; rounds++) {
        let result = playRound(getComputerChoice(), getHumanChoice()); 
        alert(result);
        
    } 
    let winner;
    if (humanScore > computerScore) {
        winner = "Human";
    } else if (computerScore > humanScore) {
        winner = "Computer";
    }
    
    alert(`Human score: ${humanScore}\nComputer score ${computerScore}\nWinner is ${winner}`)


}
