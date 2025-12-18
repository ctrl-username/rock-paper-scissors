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
  let Gameround = 0;
  let gameHistory = document.querySelector(".round-board");
  console.log(gameHistory);
  // reference to score ui for both computer and player
  let compScoreUI = document.querySelector("#computer-score");
  let humanScoreUI = document.querySelector("#player-score");
  // reference to board score ui
  let boardSCore = document.querySelector(".board-score");

  function playRound(humanChoice, computerChoice) {
    Gameround++;
    const roundUI = document.querySelector(".round");
    roundUI.textContent = `Round: ${Gameround}`;
    const playerwin = () => {
      humanScoreUI.textContent = humanScore;
      const winHistory = document.createElement("pre");
      winHistory.textContent = `👱🏼 Picked ${humanChoice}, 🤖 Picked ${computerChoice}  : ${humanChoice} beats  ${computerChoice}: Round ${Gameround}`;
      gameHistory.append(winHistory);
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
      const winHistory = document.createElement("pre");
      winHistory.textContent = `🤖 Picked ${computerChoice}, 👱🏼 Picked ${humanChoice} :${computerChoice} beats ${humanChoice}: Round ${Gameround}`;
      gameHistory.append(winHistory);
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
      humanScoreUI.textContent = humanScore;
      const winHistory = document.createElement("pre");
      winHistory.textContent = `👱🏼 Picked ${humanChoice}, 🤖 Picked ${computerChoice}  : ${humanChoice} ties with  ${computerChoice}: Round ${Gameround}`;
      gameHistory.append(winHistory);
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
  //
  function winner() {
    if (computerScore > 4) {
      return "computerWin";
    } else if (humanScore > 4) {
      return "humanWin";
    }
    return "winner is yet to be determined";
  }

  function endGame() {
    let playerButtons = document.querySelector(".player-buttons");
    const replayGame = document.createTextNode(
      "To play again. Refresh your browser",
    );

    if (winner() === "computerWin") {
      boardSCore.textContent = `Game Over 🏁 : Computer Win in ${Gameround} rounds `;
      boardSCore.append(replayGame);
      playerButtons.remove();

      console.log("computer wins");
    } else if (winner() === "humanWin") {
      boardSCore.textContent = `Game Over 🏁 : You Win in ${Gameround} rounds `;
      boardSCore.append(replayGame);
      playerButtons.remove();
    }
  }

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
    endGame();
  }
  function Paper() {
    // console.log("paper", getComputerChoice());

    playRound("paper", getComputerChoice());
    endGame();
  }
  function Scissors() {
    // console.log("scissors", getComputerChoice());
    playRound("scissors", getComputerChoice());
    endGame();
  }
}

playGame();
// refrence to ui score elements
