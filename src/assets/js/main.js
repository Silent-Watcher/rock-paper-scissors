'use strict';
let $ = document;
let movingScissors = $.querySelector('#moving_scissors');
let userHand = $.querySelector('#user-hand');
let computerHand = $.querySelector('#computer-hand');
let userHandFingers = $.querySelector('#user-hand').children;
let computerHandFingers = $.querySelector('#computer-hand').children;

let scissorsIcon = $.querySelector('#scissors__icon');
let rockIcon = $.querySelector('#rock__icon');
let paperIcon = $.querySelector('#paper__icon');

function makeScissors(indexFinger, middleFinger, isUser = true) {
  indexFinger.style.width = '130px';
  indexFinger.style.transform = isUser ? 'rotate(-5deg)' : 'rotate(5deg)';
  middleFinger.style.width = '130px';
}
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
// remove scissors when animation ends
movingScissors.addEventListener('animationend', (event) => {
  event.target.hidden = true;
});
//
// make scissors with user hand
scissorsIcon.addEventListener('click', () => {
  let userIndexFinger = userHand.firstElementChild.nextElementSibling;
  let userMiddleFinger = userIndexFinger.nextElementSibling;
  makeScissors(userIndexFinger, userMiddleFinger);
  userIndexFinger.parentElement.style.animation = 'none';
});
//
// make paper with user hand
paperIcon.addEventListener('click', () => {
  let userPaperFingers = Array.from(userHandFingers).filter((finger) => {
    return finger.classList.contains('finger');
  });
  makePaper(userPaperFingers);
  userHand.style.animation = 'none';
});
//
// make rock with user hand
rockIcon.addEventListener('click', () => {
  userHand.style.animation = 'none';
});
