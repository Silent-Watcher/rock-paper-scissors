let validActions = ['rock', 'paper', 'scissors'];
let userScore = document.querySelector('#userScore');
let computerScore = document.querySelector('#computerScore');
let userScoreValue = +userScore.dataset.score;
let computerScoreValue = +computerScore.dataset.score;

function startGame() {
  let gameSets = 5;
  for (let gameCounter = 1; gameCounter <= gameSets; gameCounter++) {
    let computerChoice = validActions[~~(Math.random() * 3)];
    let userChoice = prompt('rock,paper,scissors ?');
    // even match
    if (userChoice === computerChoice) {
      continue;
    }
    // user win moves
    if (userChoice === 'paper' && computerChoice === 'rock') {
      userScoreValue += 1;
      continue;
    }
    if (userChoice === 'rock' && computerChoice === 'scissors') {
      userScoreValue += 1;
      continue;
    }
    if (userChoice === 'scissors' && computerChoice === 'paper') {
      userScoreValue += 1;
      continue;
    }
    // computer win moves
    if (userChoice === 'paper' && computerChoice === 'scissors') {
      computerScoreValue += 1;
      continue;
    }
    if (userChoice === 'rock' && computerChoice === 'paper') {
      computerScoreValue += 1;
      continue;
    }
    if (userChoice === 'scissors' && computerChoice === 'rock') {
      computerScoreValue += 1;
      continue;
    }
  }
  computerScore.innerHTML = computerScoreValue;
  userScore.innerHTML = userScoreValue;
  if (userScoreValue > computerScoreValue) {
    alert('you win!');
  } else if (userScoreValue < computerScoreValue) {
    alert('you loose!');
  } else {
    alert('even');
  }
}
startGame();
