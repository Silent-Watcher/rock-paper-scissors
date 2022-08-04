'use strict';
let $ = document;
let movingScissors = $.querySelector('#moving_scissors');
// remove scissors when animation ends
movingScissors.addEventListener('animationend', function () {
  this.hidden = true;
});
//
