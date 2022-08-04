'use strict';
let $ = document;
// buttons
let goToIntroBtn = $.querySelector('.goToIntroBtn');
let startGameBtn = $.querySelector('#play__button');
let gotoSettingsBtn = $.querySelector('#game__setting_button');
let closeSettingsBtn = $.querySelector('#setting__close_btn');
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
let choiceIcons = $.querySelectorAll('choice__icon');
let scissorsIcon = $.querySelector('#scissors__icon');
let rockIcon = $.querySelector('#rock__icon');
let paperIcon = $.querySelector('#paper__icon');
//
let validActions = ['rock', 'paper', 'scissors'];
// scores elements
let userScore = $.querySelector('#humanScore');
let computerScore = $.querySelector('#computerScore');
// scores values
let userScoreValue = +userScore.dataset.score;
let computerScoreValue = +computerScore.dataset.score;
// gameSets which user defines it
let gameSets = 5;
// user choice
let userChoice;
// change the hand shape to scissors
function makeScissors(indexFinger, middleFinger, isUser = true) {
  indexFinger.style.width = '130px';
  indexFinger.style.transform = isUser ? 'rotate(-5deg)' : 'rotate(5deg)';
  middleFinger.style.width = '130px';
}
// change the hand shape to paper
// ToDo : user library
function makePaper(paperFingers) {
  paperFingers.map((paperFinger) => {
    paperFinger.style.left = '124px';
    paperFinger.style.left = 'calc(124px + var(--dif))';
    paperFinger.style.width = '80px';
    paperFinger.style.borderLeft = '0';
    paperFinger.style.borderRadius = '0 20px 20px 0';
  });
}
// game start
// function startGame(){

// }
// remove animated scissors from dom when animation ends
movingScissors.addEventListener('animationend', (event) => {
  event.target.hidden = true;
});
//
//---------------------- CHANGE THE SHAPE OF THE USER HAND -----------------------
// make scissors with user hand
scissorsIcon.addEventListener('click', () => {
  userChoice = 'scissors';
  let userIndexFinger = userHand.firstElementChild.nextElementSibling;
  let userMiddleFinger = userIndexFinger.nextElementSibling;
  makeScissors(userIndexFinger, userMiddleFinger);
  userIndexFinger.parentElement.style.animation = 'none';
});
//
// make paper with user hand
paperIcon.addEventListener('click', () => {
  userChoice = 'paper';
  let userPaperFingers = Array.from(userHandFingers).filter((finger) => {
    return finger.classList.contains('finger');
  });
  makePaper(userPaperFingers);
  userHand.style.animation = 'none';
});
//
// make rock with user hand
rockIcon.addEventListener('click', () => {
  userChoice = 'rock';
  userHand.style.animation = 'none';
});
//---------------------------------------------------------------------------------
// choiceIcons.forEach(choiceIcon=>{
//   choiceIcon.addEventListener('click',)
// })

startGameBtn.addEventListener('click', () => {
  introPage.classList.add('animate__backOutDown', 'animate__slow');
  gameSetsPage.firstElementChild.classList.add('animate__fadeInBottomRight');
  gameSetsPage.hidden = false;
  gameSetsPage.style.backgroundColor = '#ffffff60';
  gamePage.firstElementChild.hidden = false;
  // introPage.style.zIndex = '-1';
});

goToIntroBtn.addEventListener('click', () => {
  gamePage.firstElementChild.hidden = true;
  gameSetsPage.hidden = true;
  gameSetsPage.firstElementChild.classList.remove('animate__fadeInBottomRight');
  introPage.classList.remove('animate__backOutDown', 'animate__slow');
  introPage.classList.add('animate__backInUp');
});

gotoSettingsBtn.addEventListener('click', () => {
  settingsPage.firstElementChild.style.left = '0';
  settingsPage.firstElementChild.classList.add('animate__bounceInLeft');
  settingsPage.firstElementChild.classList.remove('animate__bounceOutLeft');
});

closeSettingsBtn.addEventListener('click', () => {
  settingsPage.firstElementChild.classList.add('animate__bounceOutLeft');
  settingsPage.firstElementChild.classList.remove('animate__bounceInLeft');
});
