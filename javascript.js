function getComputerChoice() {
    let computerChoice = "Unchosen"

    // randomly generate a choice
    randomNum = Math.floor((Math.random() * 3) + 1);
    if (randomNum === 1) {
        computerChoice = "rock";

    } else if (randomNum === 2) {
        computerChoice = "paper";

    } else if (randomNum === 3) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {

    // Asks human for choice, reask if not rock, paper or scissors
    let condition = 1;
    let humanChoice;
    while (condition === 1) {
        humanChoice = prompt("Rock paper or scissors?: ").toLowerCase().trim();
        if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
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

    // Compare choice between human and computer
    if (humanChoice === computerChoice) {
        endMessage = `Computer chose ${computerChoice}! It was a tie!`;
        humanScore += 0.5;
        computerScore += 0.5;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        endMessage = `Computer wins with ${computerChoice}!`;
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        endMessage = `Computer wins with ${computerChoice}!`; 
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        endMessage = `Computer wins with ${computerChoice}!`;
        computerScore++;
    } else {
        endMessage = `Human's ${humanChoice} won against computer's ${computerChoice}!`;
        humanScore++;
    }
    return endMessage
}   

function playGame() { 

    // Loop until 5 rounds are reached, output results
    for (let rounds = 0; rounds < 5; rounds++) {
        let result = playRound(getComputerChoice(), getHumanChoice()); 
        alert(result);
        console.log(result)
        
    } 
    
    // Compare score, check for winner
    let winner;
    if (humanScore > computerScore) {
        winner = "Human";
    } else if (computerScore > humanScore) {
        winner = "Computer";
    } else {
        winner = "It was a tie!"
    }

    winnerMessage = `Human score: ${humanScore}\nComputer score: ${computerScore}\nWinner is ${winner}`

    return winnerMessage 

}

// A win is 1 point. Tie is 0.5 each
game = playGame();
console.log(game)
alert(game)