var timerEl = $('#timer');
var mainEl = $('#main');
var startQuiz = $('#start-button');
var correctAnswer = $('#correct');
var incorrectAnswer = $('#incorrect');


startQuiz.addEventListener("click", function countdown() {
  var timeLeft = 200.00;
  var timeInterval = window.setInterval(function countdown(){
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
}); 

countdown();
