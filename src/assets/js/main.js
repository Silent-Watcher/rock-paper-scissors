'use strict';
let $ = document;
// buttons
let goToIntroBtn = $.querySelector('.goToIntroBtn');
let startGameBtn = $.querySelector('#play__button');
let gotoSettingsBtn = $.querySelector('#game__setting_button');
let closeSettingsBtn = $.querySelector('#setting__close_btn');
let gameSetsBtns = $.querySelectorAll('.gameSetsButton');
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
// let gameSets;
// change the hand shape to scissors
// function makeScissors(indexFinger, middleFinger, isUser = true) {
//   indexFinger.style.width = '130px';
//   indexFinger.style.transform = 'rotate(-5deg)';
//   middleFinger.style.width = '130px';
// }
// change the hand shape to paper
// ToDo : user library
// function makePaper(paperFingers) {
//   paperFingers.map((paperFinger) => {
//     paperFinger.style.left = '124px';
//     paperFinger.style.left = 'calc(124px + var(--dif))';
//     paperFinger.style.width = '80px';
//     paperFinger.style.borderLeft = '0';
//     paperFinger.style.borderRadius = '0 20px 20px 0';
//   });
// }
// remove animated scissors from dom when animation ends
movingScissors.addEventListener('animationend', (event) => {
  event.target.hidden = true;
});
//
// set the gameSets value
gameSetsBtns.forEach((gameSetsBtn) => {
  gameSetsBtn.addEventListener('click', function () {
    gameSetsPage.classList.add('animate__fadeOutBottomRight');
    // gameSets = +this.innerHTML;
    startGame(+this.innerHTML);
  });
});
//
//---------------------- CHANGE THE SHAPE OF THE USER HAND -----------------------
// make scissors with user hand
// scissorsIcon.addEventListener('click', () => {
//   userChoice = 'scissors';
//   let userIndexFinger = userHand.firstElementChild.nextElementSibling;
//   let userMiddleFinger = userIndexFinger.nextElementSibling;
//   makeScissors(userIndexFinger, userMiddleFinger);
//   userIndexFinger.parentElement.style.animation = 'none';
// });
//
// make paper with user hand
// paperIcon.addEventListener('click', () => {
//   userChoice = 'paper';
//   let userPaperFingers = Array.from(userHandFingers).filter((finger) => {
//     return finger.classList.contains('finger');
//   });
//   makePaper(userPaperFingers);
//   userHand.style.animation = 'none';
// });
//
// make rock with user hand
// rockIcon.addEventListener('click', () => {
//   userChoice = 'rock';
//   userHand.style.animation = 'none';
// });
//---------------------------------------------------------------------------------
// choiceIcons.forEach(choiceIcon=>{
//   choiceIcon.addEventListener('click',)
// })

// let f = 5;
// document.addEventListener('click', function () {
//   f--;
//   if (f == 0) {
//     alert('ss');
//   }
// });

function startGame(gameSets) {
  let counter = 0;
  choiceIcons.forEach((choiceIcon) => {
    choiceIcon.addEventListener('click', function (param) {
      userChoice = choiceIcon.dataset.value;
      computerChoice = validActions[~~(Math.random() * 3)];
      counter++;
      if (counter > gameSets) {
        alert('finished');
        setTimeout(() => {
          if(userScoreValue > computerScoreValue ){
            party.confetti(scoreBoard,{count: party.variation.range(40, 100),});
          }
        }, 500);
        userScore.innerHTML = 0;
        computerScore.innerHTML = 0;
        // return;
      } else {
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
    });
  });
}

// start intro page transitions
startGameBtn.addEventListener('click', () => {
  introPage.classList.add('animate__backOutDown');
  gameSetsPage.firstElementChild.classList.add('animate__fadeInBottomRight');
  gameSetsPage.hidden = false;
  gameSetsPage.style.backgroundColor = '#ffffff60';
  gamePage.firstElementChild.hidden = false;
});
// return to intro page
goToIntroBtn.addEventListener('click', () => {
  gamePage.firstElementChild.hidden = true;
  gameSetsPage.hidden = true;
  gameSetsPage.firstElementChild.classList.remove('animate__fadeInBottomRight');
  introPage.classList.remove('animate__backOutDown');
  introPage.classList.add('animate__backInUp');
});
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
