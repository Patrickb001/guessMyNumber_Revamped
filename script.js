'use strict';
/*
 console.log(document.querySelector('.message').textContent);
 document.querySelector('.message').textContent = '🎉Correct Number!'
 
 document.querySelector('.number').textContent = 13;
 document.querySelector('.score').textContent = 10;

 document.querySelector('.guess').value = 23;
 console.log( document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let highScoreText = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};
let numberStyle = function (num) {
  document.querySelector('.number').style.width = num;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number! ⛔'
    displayMessage('No Number! ⛔');

    // When Player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number!'
    displayMessage('🎉Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      highScoreText(highScore);
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉';
      displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game! 💥';
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1){
  //     document.querySelector('.message').textContent = 'Too high! 📈'
  //     score--;
  //     document.querySelector('.score').textContent =   score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game! 💥';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //When guess is too low
  // } else if (guess < secretNumber) {

  //   if (score > 1){
  //     document.querySelector('.message').textContent = 'Too low! 📉'
  //     score--;
  //     document.querySelector('.score').textContent =   score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game! 💥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //}
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // document.querySelector('.message').textContent='Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  numberStyle('15rem');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

document.querySelector('.reset').addEventListener('click', function () {
  highScore = 0;
  highScoreText(highScore);
});

document.querySelector('.hint').addEventListener('click', function () {
  const hint0 = secretNumber - 3 > 0 ? true : false;
  const hint20 = secretNumber + 3 < 20 ? true : false;

  console.log(hint0, hint20);

  numberStyle('18rem');
  document.querySelector('.number').textContent = `${
    hint0 ? secretNumber - Math.trunc(Math.random() * 5) + 1 : 0
  }-${hint20 ? secretNumber + Math.trunc(Math.random() * 5) + 2 : 20}`;

  setTimeout(() => {
    document.querySelector('.number').textContent = '?';
    numberStyle('15rem');
  }, 3000);
});
