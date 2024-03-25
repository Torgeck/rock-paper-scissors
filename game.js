const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scisBtn = document.querySelector(".scissors");
const resultContainer = document.querySelector(".results");
const score = document.createElement("span");
const result = document.createElement("span");
const maxScore = 5;
let playerScore = 0,
  compScore = 0;

resultContainer.appendChild(result);
resultContainer.appendChild(score);
score.classList.add("score");
score.textContent = `${playerScore} - ${compScore}`;

rockBtn.addEventListener("click", () => playRoundWith("rock"));
paperBtn.addEventListener("click", () => playRoundWith("paper"));
scisBtn.addEventListener("click", () => playRoundWith("scissors"));

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

  if (result === 0) outcome = `It's a tie both played ${player}`;
  else if (result < 0) {
    outcome = `You lose ${computer} beats ${player}`;
  } else {
    outcome = `You win ${player} beats ${computer}`;
  }

  return outcome;
}

function displayOutcome(outcome) {
  result.textContent = outcome;
}

function updateScore(result) {
  const score = document.querySelector(".score");
  // Player won
  if (result > 0) {
    playerScore += 1;
  } else {
    compScore += 1;
  }

  // Check win game condition
  if (playerScore === maxScore || compScore === maxScore) {
    const finalScore = playerScore > compScore ? ` You won` : ` You lose`;
    score.textContent = finalScore;
  } else {
    score.textContent = ` ${playerScore} - ${compScore}`;
  }
}

function playRoundWith(playerChoice) {
  let result,
    computerChoice = getComputerChoice();

  // resets game if win condition met
  if (playerScore >= maxScore || compScore >= maxScore) {
    playerScore = 0;
    compScore = 0;
    score.textContent = ` ${playerScore} - ${compScore}`;
  }

  result = playRound(playerChoice, computerChoice);
  displayOutcome(getOutcome(result, playerChoice, computerChoice));
  // changes global variables
  if (result != 0) {
    updateScore(result);
  }
}
