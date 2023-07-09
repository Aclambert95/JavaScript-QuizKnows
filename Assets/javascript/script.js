var timerEl = document.getElementById('#timer');
var mainEl = document.getElementById('#main');
var startQuiz = document.getElementById('#start-button');
var correctAnswer = document.getElementById('#correct');
var incorrectAnswer = document.getElementById('#incorrect');

var startQuiz = document.getElementById('start-button');

var questions = [
  {
    question: "What is the programming language that was originally created to be run in the browser with the intention of enhancing a webpage's capabilities?",
    answers: {
      a: 'HTML',
      b: 'CSS',
      c: 'JavaScript',
      d: 'WASD'
    },
    correctAnswer: 'c'
  },
  {
    question: 'Who primarily uses JavaScript when it comes to web development?',
    answsers: {
      a: 'Front-End Developers',
      b: 'Back-End Developers',
      c: 'Both',
      d: 'Neither'
    },
    correctAnswer: 'c'
  },
  {
    question: 'What is an example of how users interact with a webpage?',
    Answers: {
      a: 'Forms',
      b: 'Playing Audio and Video',
      c: 'Allowing Camera or Microphone to enable conversation',
      d: 'All of the Above'
    },
    correctAnswer: 'd'
  },
  {
    question: 'What must be present on the index.HTML code in order to link it to the JavaScript code?',
    answers: {
      a: '<link></link>',
      b: '<script></script>',
      c: '<href></href>',
      d: '<div></div>'
    },
    correctAnswer: 'b'
  },
  {
    question: 'What code can we use to check if our JavaScript code is running correctly when we open the inspect element in the browser?',
    answers: {
      a: 'Elements',
      b: 'Network',
      c: 'Performance Insights',
      d: 'Console'
    },
    correctAnswer: 'd'
  },
  {
    question: 'What line of code would considered true for the variable "var x = 50"?',
    answers: {
      a: 'x < 49.99',
      b: 'x >= 49.99',
      c: 'x - 50 > 0',
      d: 'x > 49.99'
    },
    correctAnswer: 'd'
  },
  {
    question: 'What symbol can we use to concatenate multiple variables or lines of text in javascript?',
    answers: {
      a: '&',
      b: '+',
      c: '//',
      d: '||',
    },
    correctAnswer: 'b'
  },
  {
    question: 'True or False, When we define the same variable name with a new value, the original value is kept.',
    answer: {
      a: 'True',
      b: 'False'
    },
    correctAnswer: 'b'
  }
]

function countdown() {
  console.log('in countdown function');
  var timeLeft = 200.00;
  var timeInterval = window.setInterval(function countdown() {
    timeLeft--;
    timerEl.textContent = "Time Remaining: " + timeLeft;
    if (timeLeft === 0.00) {
      // Stops execution of action at set interval
      clearInterval(timeInterval);
      displayMessage();
      timerEl.textContent = ' ';
    };
  }, 1000);
};

startQuiz.addEventListener('click', countdown());