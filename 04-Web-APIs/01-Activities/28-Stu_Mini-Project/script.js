// Var w/ list of words
var userOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wordList = ['javascript', 'variable', 'function', 'array'];
var startButton = document.querySelector('#start');
startButton.addEventListener('click', init);

var numWins = 0;
var attempts = 12;
var init = function() {
    var wordList = computerOptions[Math.floor(Math.random() * wordList.length)];
        console.log(wordList[word]);
}
// Math.random and math.floor to pick a random word


// If/else for whether letters are in the word

// A way to display correct letters as part of the word

// A way to determine whether or not you've guessed the complete word

// A timer

// Restart