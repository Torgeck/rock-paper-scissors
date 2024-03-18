function getPlayerChoice() {
  let choice = prompt("Enter Rock/Paper/Scissors").toLowerCase();
  let condition = false;
  // Maybe verify that the word enter is correct
  while (!condition) {
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      condition = true;
    } else {
      choice = prompt("Re-enter Rock/Paper/Scissors").toLowerCase();
    }
  }

  return choice;
}

function getComputerChoice() {
  const number = Math.floor(Math.random() * 3) + 1;
  let choice;

  switch (number) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
    default:
      console.log("Something went wrong");
      break;
  }

  return choice;
}

function playRound(playerChoice, computerChoice) {
  let roundResult;
  // Case of a tie result is 0
  if (playerChoice === computerChoice) {
    roundResult = 0;
  } else {
    switch (playerChoice) {
      case "paper":
        if (computerChoice === "rock") {
          roundResult = 1;
        } else {
          roundResult = -1;
        }
        break;

      case "rock":
        if (computerChoice === "scissors") {
          roundResult = 1;
        } else {
          roundResult = -1;
        }
        break;

      case "scissors":
        if (computerChoice === "paper") {
          roundResult = 1;
        } else {
          roundResult = -1;
        }
        break;
    }
  }
  return roundResult;
}

function getOutcome(result, player, computer) {
  let outcome;

  if (result === 0) outcome = `It's a tie both played ${player} - ${computer}`;
  else if (result < 0) {
    outcome = `You lose ${computer} beats ${player}`;
  } else {
    outcome = `You win ${player} beats ${computer}`;
  }

  return outcome;
}

function playGame() {
  const maxRound = 5;
  let currentRound = 1;
  let playerChoice, computerChoice;

  for (currentRound; currentRound <= maxRound; currentRound++) {
    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();

    console.log(
      getOutcome(
        playRound(playerChoice, computerChoice),
        playerChoice,
        computerChoice
      )
    );
  }
}
