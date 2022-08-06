'use strict';
let $ = document;
// buttons
let goToIntroBtn = $.querySelector('.goToIntroBtn');
let startGameBtn = $.querySelector('#play__button');
let gotoSettingsBtn = $.querySelector('#game__setting_button');
let closeSettingsBtn = $.querySelector('#setting__close_btn');
let gameSetsBtns = $.querySelectorAll('.gameSetsButton');
let homeWidgetBtn = $.querySelector('#home_widget');
let refreshGame = homeWidgetBtn.previousElementSibling;
// pages
let introPage = $.querySelector('#intro_page');
let gamePage = $.querySelector('#game_page');
let gameSetsPage = $.querySelector('#game_sets_page');
let settingsPage = $.querySelector('#settings_page');
// animated moving scissors
let movingScissors = $.querySelector('#moving_scissors');
// hands
let userHand = $.querySelector('#user-hand');
let computerHand = $.querySelector('#computer-hand');
// all fingers
let userHandFingers = $.querySelector('#user-hand').children;
let computerHandFingers = $.querySelector('#computer-hand').children;
// game icons
let choiceIcons = $.querySelectorAll('.choice__icon');
let scissorsIcon = $.querySelector('#scissors__icon');
let rockIcon = $.querySelector('#rock__icon');
let paperIcon = $.querySelector('#paper__icon');
//
let validActions = ['rock', 'paper', 'scissors'];
//
let userChoice;
let computerChoice;
// scores elements
let userScore = $.querySelector('#humanScore');
let computerScore = $.querySelector('#computerScore');
// scores values
let userScoreValue = +userScore.dataset.score;
let computerScoreValue = +computerScore.dataset.score;
// avatars
let userAvatar = $.querySelector('#main__player__avatar');
let computerAvatar = $.querySelector('#computer__player__avatar');
//
let scoreBoard = $.querySelector('#scoreboard');
// gameSets which user defines it
let gameSets = 0;

// remove animated scissors from dom when animation ends
movingScissors.addEventListener('animationend', (event) => {
  event.target.hidden = true;
});
//
// set the gameSets value
gameSetsBtns.forEach((gameSetsBtn) => {
  gameSetsBtn.addEventListener('click', function () {
    gameSetsPage.classList.add('animate__fadeOutBottomRight');
    gamePage.firstElementChild.style.filter = 'blur(0)';
    gameSets = +this.innerHTML;
    // startGame(gameSets);
  });
});
//
function startGame(gameSets, userChoice) {
  computerChoice = validActions[~~(Math.random() * 3)];
  if (gameSets === 0) {
    homeWidgetBtn.disabled = false;
    refreshGame.disabled = false;
    if (userScoreValue > computerScoreValue) {
      party.confetti(scoreBoard, {
        count: party.variation.range(40, 100),
      });
    }
  }
  if (userChoice === computerChoice) {
  }
  // user win moves
  if (userChoice === 'paper' && computerChoice === 'rock') {
    userScoreValue += 1;
    userScore.innerHTML = userScoreValue;
  }
  if (userChoice === 'rock' && computerChoice === 'scissors') {
    userScoreValue += 1;
    userScore.innerHTML = userScoreValue;
  }
  if (userChoice === 'scissors' && computerChoice === 'paper') {
    userScoreValue += 1;
    userScore.innerHTML = userScoreValue;
  }
  // computer win moves
  if (userChoice === 'paper' && computerChoice === 'scissors') {
    computerScoreValue += 1;
    computerScore.innerHTML = computerScoreValue;
  }
  if (userChoice === 'rock' && computerChoice === 'paper') {
    computerScoreValue += 1;
    computerScore.innerHTML = computerScoreValue;
  }
  if (userChoice === 'scissors' && computerChoice === 'rock') {
    computerScoreValue += 1;
    computerScore.innerHTML = computerScoreValue;
  }
}

// start intro page transitions
startGameBtn.addEventListener('click', () => {
  introPage.classList.add('animate__backOutDown');
  gameSetsPage.hidden = false;
  gameSetsPage.classList.remove('animate__fadeOutBottomRight');
  gameSetsPage.classList.add('animate__fadeInBottomRight');
  // gameSetsPage.style.background = 'transparent';
  gamePage.firstElementChild.style.filter = 'blur(3px)';
  // gamePage.style.filter = 'blur(3px)';
  gamePage.firstElementChild.hidden = false;
});
// return to intro page
homeWidgetBtn.addEventListener('click', ReturnToIntroPage);
goToIntroBtn.addEventListener('click', ReturnToIntroPage);
// setting page
// open settings page
gotoSettingsBtn.addEventListener('click', () => {
  settingsPage.firstElementChild.style.left = '0';
  settingsPage.firstElementChild.classList.add('animate__bounceInLeft');
  settingsPage.firstElementChild.classList.remove('animate__bounceOutLeft');
});
// close settings page
closeSettingsBtn.addEventListener('click', () => {
  settingsPage.firstElementChild.classList.add('animate__bounceOutLeft');
  settingsPage.firstElementChild.classList.remove('animate__bounceInLeft');
});

function ReturnToIntroPage() {
  gamePage.firstElementChild.hidden = true;
  gameSetsPage.hidden = true;
  gameSetsPage.firstElementChild.classList.remove('animate__fadeInBottomRight');
  introPage.classList.remove('animate__backOutDown');
  introPage.classList.add('animate__backInUp');
}
// refresh the game
refreshGame.addEventListener('click', () => {
  gameSetsPage.hidden = false;
  gameSetsPage.classList.remove('animate__fadeOutBottomRight');
  gameSetsPage.classList.add('animate__fadeInBottomRight');
  gamePage.firstElementChild.style.filter = 'blur(3px)';
});
// start the game
choiceIcons.forEach((choiceIcon) => {
  choiceIcon.addEventListener('click', () => {
    if (gameSets === 0) {
      userScoreValue = 0;
      computerScoreValue = 0;
      userScore.innerHTML = 0;
      computerScore.innerHTML = 0;
      alert('game is finished');
    } else {
      gameSets--;
      startGame(gameSets, choiceIcon.dataset.value);
    }
  });
});
