'use strict';

/*
JavaScript in the Browser: DOM and Events

Coding Challenge #1

Implement a game rest functionality, so that the player can make a new guess!

Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
   'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
   fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀 
*/

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayScore(score) {
  document.querySelector('.score').textContent = score;
}

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score <= 1) {
    displayScore(0);
    displayMessage('💥 You lost the game');
  } else {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No Number';
    } else if (guess == secretNumber) {
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#60b347';
      displayMessage('🎉 Correct Number');
      document.querySelector('.highscore').textContent =
        score > highScore ? score : highScore;
    } else if (guess !== secretNumber) {
      displayScore(--score);
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
