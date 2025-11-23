let humanScore = 0;
let computerScore;
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
  console.log(randomNumber, computerSelection);
}
function getHumanChoice() {}
function playRound() {}

playRound(humanSelection, computerSelection);
