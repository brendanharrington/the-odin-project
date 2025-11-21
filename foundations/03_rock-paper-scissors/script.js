const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const resultDiv = document.getElementById('result');
const roundSpan = document.getElementById('round');
const choicesDiv = document.getElementById('choices');
const resetButton = document.getElementById('reset');

let round = 1;
const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
};

const updateScore = (result) => {
  if (round === 5) {
    for (const child of choicesDiv.children) {
      child.disabled = true;
    }
  }
  if (result === "You win!") {
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
    resultDiv.textContent = "You won this round!";
  } else if (result === "You lose!") {
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
    resultDiv.textContent = "You lost this round!";
  } else {
    resultDiv.textContent = "This round is a tie!";
  }
};

const resetGame = () => {
  for (const child of choicesDiv.children) {
    child.disabled = false;
  }
  round = 1;
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  roundSpan.textContent = 1;
  resultDiv.textContent = "";
};

for (const child of choicesDiv.children) {
  child.addEventListener('click', () => {
    const playerSelection = child.id;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    updateScore(result);
    round++;
    roundSpan.textContent = round;
  });
};

resetButton.addEventListener('click', resetGame);