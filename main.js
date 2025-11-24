let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  // change to return later
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
  const playerwin = () =>
    console.log(
      `%cYou win! ${
        humanChoice[0].toUpperCase() + humanChoice.slice(1)
      } Beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`,
      "font-size:25px"
    );
  const computerwin = () =>
    console.log(
      `%cYou lose! ${
        computerChoice[0].toUpperCase() + computerChoice.slice(1)
      } Beats ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}`,
      "font-size:25px"
    );

  if (humanChoice === computerChoice) {
    console.log("it's a tie");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    playerwin();
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    computerwin();
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    playerwin();
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    computerwin();
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    playerwin();
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    computerwin();
  }
}

function playGame() {}

getHumanChoice();
getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(computerSelection, humanSelection, humanScore, computerScore);
