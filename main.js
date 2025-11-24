function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("pick an option between rock, paper or scissors").toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

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

    if (humanChoice == computerChoice) {
      console.log("%cit's a tie", "font-size:25px");
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
  // if

  for (let round = 1; round <= 5; round++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`%c Round! ${round}`, "font-size:25px");
    console.log(
      `%c🧑:${humanSelection},🤖:${computerSelection}`,
      "font-size:25px;color:gold"
    );
    playRound(humanSelection, computerSelection);
  }
  console.log(
    `%c Game over! You Scored ${humanScore} and Computer Scored ${computerScore}`,
    "font-size:25px"
  );
}

playGame();
