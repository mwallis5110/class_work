// GIVEN I am taking a code quiz

// Global Variables:
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var highScore = '';
var startEl = document.getElementById('start');
var restartEl = document.getElementById(".restart");
var timerEl = document.getElementById('timer');  
var secondsLeft = 120;

// WHEN I click the start button
    //Event Listener

    startEl.addEventListener('click', function (event) {
        event.preventDefault(); 
    }); // should load question and start timer


// THEN a timer starts and I am presented with a question
    //Timer
    //setTime function - start when start button is clicked
function setTime() { 
      // Sets interval in variable
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left";
    
        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and send message
            sendMessage();
        };
    
    }, 1000);
};

setTime ();

// WHEN I answer a question
    //Arrays for questions - One big array

    const questions = [
        {
            question: "Which two variables can a Boolean function return?",
            answers: ["Up/Down", "Right/Left", "True/False", "Cat/Dog"],
            correctAnswer: "C"
            //If statement to check correctness
        };
        {
            question: "Which type of variable can be globally scoped?";
            answers: ["const", "var", "let", "event"],
            correctAnswer: "B"
        }
        {
            question: "Which of the following represents abstract equality?";
            answers: ["=", "==", "$", "!=="],
            correctAnswer: "B"
        }
        {
            question: "Style properties can be altered with Javascript via the ______ method.";
            answers: ["addEventListener", "sendMessage", "preventDefault", "setAttribute"],
            correctAnswer: "d"
        }
        {
            question: '2+"2" = __';
            answers: ["22", "4", "7", "10"],
            correctAnswer: "A"
        }
        
    ];
    //Function to load next question

    var currentQuestion = 0;
    function loadQuestion () {
        var data = questions [currentQuestion];
        document.getElementById("questionSpot").textContent(data.question)
    }


// THEN I am presented with another question
    //for loop to cycle through questions

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock
        //Some way to interface with the timer
document.getElementById("answers").addEventListener("click", function (event) {
    event.preventDefault();
    //right/wrong answer
    if (event.target.value !== questions [currentQuestion].correctAnswer) {
        secondsLeft -= 20;
    }
    //last question or not
    if(currentQuestion === 4) {
        //celebratory gif, then go to high scores page - function to go there, or when view highscores button is clicked
            //Declare function globally, call here - Call highscores button too
    } else {
        currentQuestion++;
        loadQuestion();
    }
    //not last question
});
// WHEN all questions are answered or the timer reaches 0

// THEN the game is over
    // Trigger an event based off the timer running out - clearInterval
    // Would this be done within the timer code or separately? - Both
    //Functions to end quiz, populate next question, show high scores, etc

// WHEN the game is over

// THEN I can save my initials and my score
    //Local Storage 
