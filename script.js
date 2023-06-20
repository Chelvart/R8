var box = document.getElementById('box');
var score = document.getElementById('score');
var timer = document.getElementById('timer');
var startButton = document.getElementById('start');

var currentScore = 0;
var countdown = 10;
var gameStarted = false;

box.addEventListener('click', function() {
  if (gameStarted) {
    currentScore++;
    score.textContent = 'Score: ' + currentScore;
  }
});

startButton.addEventListener('click', function() {
  if (!gameStarted) {
    gameStarted = true;
    startButton.disabled = true;
    countdown = 10;
    currentScore = 0;
    score.textContent = 'Score: 0';
    timer.textContent = 'Time: ' + countdown;

    var interval = setInterval(function() {
      countdown--;
      timer.textContent = 'Time: ' + countdown;

      if (countdown <= 0) {
        clearInterval(interval);
        gameStarted = false;
        startButton.disabled = false;
        alert('Game over! Your score is ' + currentScore);
      }
    }, 1000);
  }
});
