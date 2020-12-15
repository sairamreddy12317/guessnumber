'use strict';

let secretNumber = Math.trunc(Math.random() * 10) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct Number';
    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (score > 1) {
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = '📈Too High';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor =
        'rgba(240, 103, 12, 0.529)';
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '📉Too Low';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor =
        'rgba(211, 15, 15, 0.494)';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
