// GIVEN I am taking a code quiz

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results')
// Global Variables:
var quizQuestions = [];
var highScore = '';

// WHEN I click the start button

// THEN a timer starts and I am presented with a question
    //Timer
var startEl = document.querySelector(".start");
var restartEl = document.querySelector(".restart")

// Selects element by id
var mainEl = document.getElementById("main");
    
var secondsLeft = 120;
    
function setTime() {
      // Sets interval in variable
var timerInterval = setInterval(function() {
    secondsLeft--;
    startEl.textContent = secondsLeft + " seconds left";
    
    if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
    }
    
    }, 12000);
}
    
    // Function to create and append colorsplosion image
    function sendMessage() {
      time
      El.textContent = " ";
      var imgEl = document.createElement("img");
      imgEl.setAttribute("src", "images/image_1.jpg");
      mainEl.appendChild(imgEl);
    
    }
    
    setTime();

// WHEN I answer a question
    //Arrays for questions - One big array or one for each??
    //How to store answers?

// THEN I am presented with another question
    //Math.random and math.floor to cycle through?

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock
        //Some way to interface with the timer

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over
    // This part should be easy. I just have to figure out how to trigger an event based off the timer running out

// WHEN the game is over

// THEN I can save my initials and my score
    //Local Storage