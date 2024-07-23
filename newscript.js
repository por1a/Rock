let humanChoice, computerChoice, endMessage, humanScore = 0, computerScore = 0;

const choiceButtons = document.querySelectorAll(".choice-btn");
const humanScoreEle = document.querySelector(".human-score");
const computerScoreEle = document.querySelector(".computer-score");
const endMessageEle = document.querySelector(".end-message")
const buttonContainerEle = document.querySelector(".button-container")
const buttonsEle = document.querySelector(".buttons")
const newGameButton = document.createElement("button");
const winnerMessage = document.createElement("div");


// get human choice
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.id;
        console.log(humanChoice);
    })
});

// get bot choice
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        randomNum = Math.floor((Math.random() * 3) + 1);

        if (randomNum === 1) {
            computerChoice = "rock";

        } else if (randomNum === 2) {
            computerChoice = "paper";

        } else if (randomNum === 3) {
            computerChoice = "scissors";
        }
        console.log(computerChoice)
    })
});

// check winner of round
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (humanChoice === computerChoice) {
            endMessage = `Computer chose ${computerChoice}! It was a tie!`;

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
    })
});

choiceButtons.forEach((button) =>  {
    button.addEventListener("click", () => {
        humanScoreEle.textContent = `Human Score: ${humanScore}`;
        computerScoreEle.textContent = `Computer Score: ${computerScore}`;
        endMessageEle.textContent = endMessage;
    });
});

// end game and display winner
choiceButtons.forEach((button) =>  { 
    button.addEventListener('click', () => {
        if (humanScore === 5 || computerScore === 5) {
            // display the winner of the game
            buttonContainerEle.removeChild(buttonsEle);
            winnerMessage.setAttribute("style", "color: #4287f5; font-size: 40px");
            buttonContainerEle.append(winnerMessage);
            if (humanScore === 5) {
                winnerMessage.textContent = "Human is the winner of the game!" ;
            }
            else if (computerScore === 5) {
                winnerMessage.textContent = "Computer is the winner of the game!";
            };
            // display the start new button
                    newGameButton.setAttribute("class", "choice-btn");
                    newGameButton.setAttribute("style", "margin-top: 10px;")
                    newGameButton.textContent = "New";
                    buttonContainerEle.append(newGameButton);
        };         
    });
});

newGameButton.addEventListener("click", () => {
    
    buttonContainerEle.removeChild(newGameButton);
    buttonContainerEle.removeChild(winnerMessage);
    buttonContainerEle.appendChild(buttonsEle);

    humanScore = 0;
    computerScore = 0;
    
    humanScoreEle.textContent = "Human Score: 0";
    computerScoreEle.textContent = "Human Score: 0";
    endMessageEle.textContent = "Choose an option!";


});