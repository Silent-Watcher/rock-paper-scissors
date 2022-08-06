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
let hands = $.querySelector('.hand');
let userHand = $.querySelector('#user-hand');
// userHand.classList.add('paper__Hand')
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
// alert initialization
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

// remove animated scissors from dom when animation ends
movingScissors.addEventListener('animationend', (event) => {
  event.target.hidden = true;
});
//
function ReturnToIntroPage() {
  gamePage.firstElementChild.hidden = true;
  gameSetsPage.hidden = true;
  gameSetsPage.firstElementChild.classList.remove('animate__fadeInBottomRight');
  introPage.classList.remove('animate__backOutDown');
  introPage.classList.add('animate__backInUp');
}
// set the gameSets value
gameSetsBtns.forEach((gameSetsBtn) => {
  gameSetsBtn.addEventListener('click', function () {
    gameSetsPage.classList.add('animate__fadeOutBottomRight');
    gamePage.firstElementChild.style.filter = 'blur(0)';
    gameSets = +this.innerHTML;
  });
});
//
//
function startGame(gameSets, userChoice) {
  computerChoice = validActions[~~(Math.random() * 3)];
  if (gameSets === 0) {
    userHand.classList.remove('paper__hand', 'fistHand', 'scissorsHand-user');
    computerHand.classList.remove(
      'paper__hand',
      'fistHand',
      'scissorsHand-computer'
    );
    homeWidgetBtn.disabled = false;
    refreshGame.disabled = false;
    if (userScoreValue > computerScoreValue) {
      party.confetti(scoreBoard, {
        count: party.variation.range(40, 100),
      });
      Toast.fire({
        icon: 'info',
        title: 'You Win!!! 😍',
      });
    }
  }
  if (userChoice === computerChoice) {
    Toast.fire({
      icon: 'info',
      title: 'You tied!!! 😐',
    });
    if (userChoice === 'paper') {
      userHand.classList.add('paper__Hand');
      computerHand.classList.add('paper__Hand');
      userHand.classList.remove('scissorsHand-user', 'fistHand');
      computerHand.classList.remove('fistHand', 'scissorsHand-computer');
    }
    if (userChoice === 'rock') {
      userHand.classList.add('fistHand');
      computerHand.classList.add('fistHand');
      computerHand.classList.remove('scissorsHand-computer', 'paper__Hand');
      userHand.classList.remove('scissorsHand-computer', 'paper__Hand');
    }
    if (userChoice === 'scissors') {
      userHand.classList.add('scissorsHand-user');
      computerHand.classList.add('scissorsHand-computer');
      computerHand.classList.remove('fistHand', 'paper__Hand');
      userHand.classList.remove('fistHand', 'paper__Hand');
    }
  }
  // user win moves
  if (userChoice === 'paper' && computerChoice === 'rock') {
    userHand.classList.add('paper__Hand');
    computerHand.classList.add('fistHand');
    userScoreValue += 1;
    userHand.classList.remove('scissorsHand-user', 'fistHand');
    computerHand.classList.remove('scissorsHand-computer', 'paper__Hand');
    userScore.innerHTML = userScoreValue;
  }
  if (userChoice === 'rock' && computerChoice === 'scissors') {
    userHand.classList.add('fistHand');
    computerHand.classList.add('scissorsHand-computer');
    userScoreValue += 1;
    computerHand.classList.remove('fistHand', 'paper__Hand');
    userHand.classList.remove('scissorsHand-user', 'paper__Hand');
    userScore.innerHTML = userScoreValue;
  }
  if (userChoice === 'scissors' && computerChoice === 'paper') {
    userHand.classList.add('scissorsHand-user');
    computerHand.classList.add('paper__Hand');
    userScoreValue += 1;
    computerHand.classList.remove('fistHand', 'scissorsHand-computer');
    userHand.classList.remove('fistHand', 'paper__Hand');
    userScore.innerHTML = userScoreValue;
  }
  // computer win moves
  if (userChoice === 'paper' && computerChoice === 'scissors') {
    userHand.classList.add('paper__Hand');
    computerHand.classList.add('scissorsHand-computer');
    computerScoreValue += 1;
    userHand.classList.remove('fistHand', 'scissorsHand-user');
    computerHand.classList.remove('fistHand', 'paper__Hand');
    computerScore.innerHTML = computerScoreValue;
  }
  if (userChoice === 'rock' && computerChoice === 'paper') {
    userHand.classList.add('fistHand');
    computerHand.classList.add('paper__Hand');
    computerScoreValue += 1;
    computerHand.classList.remove('fistHand', 'scissorsHand-computer');
    userHand.classList.remove('paper__Hand', 'scissorsHand-user');
    computerScore.innerHTML = computerScoreValue;
  }
  if (userChoice === 'scissors' && computerChoice === 'rock') {
    userHand.classList.add('scissorsHand-user');
    computerHand.classList.add('fistHand');
    computerScoreValue += 1;
    computerHand.classList.remove('paper__Hand', 'scissorsHand-computer');
    userHand.classList.remove('paper__Hand', 'fistHand');
    computerScore.innerHTML = computerScoreValue;
  }
}
// start intro page transitions
startGameBtn.addEventListener('click', () => {
  introPage.classList.add('animate__backOutDown');
  gameSetsPage.hidden = false;
  gameSetsPage.classList.remove('animate__fadeOutBottomRight');
  gameSetsPage.classList.add('animate__fadeInBottomRight');
  gamePage.firstElementChild.style.filter = 'blur(3px)';
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
    if (gameSets < 1) {
      userScoreValue = 0;
      computerScoreValue = 0;
      userScore.innerHTML = 0;
      computerScore.innerHTML = 0;
      Toast.fire({
        icon: 'info',
        title: 'Game is finished 😆',
      });
      userHand.className ='hand';
      computerHand.className ='hand';
    } else {
      gameSets--;
      startGame(gameSets, choiceIcon.dataset.value);
    }
  });
});
//
