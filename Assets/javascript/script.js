var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('main');

function countdown() {
    var timeLeft = 200.00;
    var timeInterval = window.setInterval(function () {
      timeLeft--;
      timerEl.textContent = "Time Remaining: " + timeLeft;
      if (timeLeft === 0.00) {
        // Stops execution of action at set interval
        clearInterval(timeInterval);
        // Calls function to create and append message
        displayMessage();
        timerEl.textContent = " ";
      };
    }, 1000);
  }

  countdown();

  var startQuiz = document.getElementById('start-button')

  startQuiz.addEventListener("click", function() {
    
  });