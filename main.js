function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice(roundNumber) {
  return `pick an option between rock, paper or scissors Round(${roundNumber})`.toLowerCase();
}

function playGame(humanChoiceClick) {
  let humanScore = 0;
  let computerScore = 0;
  // reference to score ui for both computer and player
  let compScoreUI = document.querySelector("#computer-score");
  let humanScoreUI = document.querySelector("#player-score");
  // reference to board score ui
  let boardSCore = document.querySelector(".board-score");

  function playRound(humanChoice, computerChoice) {
    const playerwin = () => {
      humanScoreUI.textContent = humanScore;
      boardSCore.textContent = `You win! ${
        humanChoice[0].toUpperCase() + humanChoice.slice(1)
      } Beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`;
      console.log(
        `%cYou win! ${
          humanChoice[0].toUpperCase() + humanChoice.slice(1)
        } Beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`,
        "font-size:25px",
      );
    };
    const computerwin = () => {
      compScoreUI.textContent = computerScore;
      boardSCore.textContent = `You lose! ${
        computerChoice[0].toUpperCase() + computerChoice.slice(1)
      } Beats ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}`;
      console.log(
        `%cYou lose! ${
          computerChoice[0].toUpperCase() + computerChoice.slice(1)
        } Beats ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}`,
        "font-size:25px",
      );
    };

    if (humanChoice == computerChoice) {
      boardSCore.textContent = `It's a tie, you both picked ${computerChoice.toUpperCase()}`;
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

  for (let round = 1; round <= 1; round++) {
    const humanSelection = humanChoiceClick;
    const computerSelection = getComputerChoice();
    console.log(`%c Round! ${round}`, "font-size:25px");
    console.log(
      `%c🧑:${humanSelection},🤖:${computerSelection}`,
      "font-size:25px;color:gold",
    );
    playRound(humanSelection, computerSelection);
  }
  console.log(
    `%c Game over! You Scored ${humanScore} and Computer Scored ${computerScore},
    ${
      humanScore > computerScore
        ? "You win"
        : computerScore > humanScore
          ? "You lose"
          : "It's a Tie"
    }`,
    "font-size:25px",
  );

  // reference to player buttons
  const rockP = document.querySelector(".rock");
  const paperP = document.querySelector(".paper");
  const scissorsP = document.querySelector(".scissors");
  // add event listener for player buttons
  rockP.addEventListener("click", Rock);
  paperP.addEventListener("click", Paper);
  scissorsP.addEventListener("click", Scissors);

  function Rock() {
    // console.log("rock", getComputerChoice());
    playRound("rock", getComputerChoice());
  }
  function Paper() {
    // console.log("paper", getComputerChoice());

    playRound("paper", getComputerChoice());
  }
  function Scissors() {
    // console.log("scissors", getComputerChoice());
    playRound("scissors", getComputerChoice());
  }
}

playGame();
// refrence to ui score elements
