/* eslint-disable @cspell/spellchecker */

import Swal from 'sweetalert2';
import party from 'party-js';

const $ = document;
// buttons
const goToIntroBtn = $.querySelector('.goToIntroBtn');
const startGameBtn = $.querySelector('#play__button');
const gotoSettingsBtn = $.querySelector('#game__setting_button');
const closeSettingsBtn = $.querySelector('#setting__close_btn');
const gameSetsBtns = $.querySelectorAll('.gameSetsButton');
const homeWidgetBtn = $.querySelector('#home_widget');
const refreshGame = homeWidgetBtn.previousElementSibling;
// pages
const introPage = $.querySelector('#intro_page');
const gamePage = $.querySelector('#game_page');
const gameSetsPage = $.querySelector('#game_sets_page');
const settingsPage = $.querySelector('#settings_page');
const helpPage = $.querySelector('#help');
// animated moving scissors
const movingScissors = $.querySelector('#moving_scissors');
// hands
const userHand = $.querySelector('#user-hand');
const computerHand = $.querySelector('#computer-hand');
// game icons
const choiceIcons = $.querySelectorAll('.choice__icon');
//
const validActions = ['rock', 'paper', 'scissors'];
//
let computerChoice;
// scores elements
const userScore = $.querySelector('#humanScore');
const computerScore = $.querySelector('#computerScore');
// scores values
let userScoreValue = +userScore.dataset.score;
let computerScoreValue = +computerScore.dataset.score;
// avatars
//
const scoreBoard = $.querySelector('#scoreboard');
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
//initial tooltips
const tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]',
);
// eslint-disable-next-line no-unused-vars
const tooltipList = [...tooltipTriggerList].map(
	// eslint-disable-next-line no-undef
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
);
// remove animated scissors from dom when animation ends
movingScissors.addEventListener('animationend', (event) => {
	event.target.hidden = true;
});
//
function ReturnToIntroPage() {
	gamePage.firstElementChild.hidden = true;
	gameSetsPage.hidden = true;
	gameSetsPage.firstElementChild.classList.remove(
		'animate__fadeInBottomRight',
	);
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
		userHand.classList.remove(
			'paper__hand',
			'fistHand',
			'scissorsHand-user',
		);
		computerHand.classList.remove(
			'paper__hand',
			'fistHand',
			'scissorsHand-computer',
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
			computerHand.classList.remove(
				'scissorsHand-computer',
				'paper__Hand',
			);
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
			userHand.className = 'hand';
			computerHand.className = 'hand';
		} else {
			gameSets--;
			startGame(gameSets, choiceIcon.dataset.value);
		}
	});
});
//
let helpWindowIntervalId;
// show help window
$.querySelector('#help__btn').addEventListener('click', () => {
	helpPage.style.top = '20px';
	helpWindowIntervalId = setTimeout(() => {
		helpPage.style.top = '-150px';
	}, 6000);
});
helpPage.addEventListener('mouseenter', function () {
	clearTimeout(helpWindowIntervalId);
});
// remove help window
$.addEventListener('keyup', (event) => {
	if (event.key === 'Escape') {
		helpPage.style.top = '-150px';
	}
});
$.querySelector('#close__help_btn').addEventListener('click', function () {
	helpPage.style.top = '-150px';
});
