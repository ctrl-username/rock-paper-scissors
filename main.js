let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerSelection = "rock";
  } else if (randomNumber === 1) {
    computerSelection = "paper";
  } else if (randomNumber === 2) {
    computerSelection = "scissors";
  }
}

function getHumanChoice() {
  humanSelection = prompt(
    "pick an option between rock, paper or scissors"
  ).toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("%cYou win", "font-size:25px");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("%cComputer Win, You lose", "font-size:25px");
    computerScore++;
  }
}

getHumanChoice();
getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(computerSelection, humanSelection, humanScore, computerScore);
