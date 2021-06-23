// Rock Paper Scissors Game

function rockPaperScissors {
// 1. User chooses rock, paper, or scissors
    const choices = ['R', 'P', 'S'];
    // Prompt asking user to choose object
    var userChoice = window.prompt("Rock. Paper, Scissors Game! Choose R, P, or S");

    if (!userChoice) {
        return;
    }
    //Result:
    console.log(userChoice);

    let random = Math.floor(math.random() * options.length);
    console.log(choices[random]);

    var compChoice = choices[random];

    let userWins = 0;
    let userLosses = 0;
    let userTies = 0;
// 3. Comparison of User vs Compter choice
    if (userChoice === compChoice) {
        userTies++
        console.log("It's a tie!")
    } else if (userChoice['R'] && compChoice['S']) {
        userWins++
        console.log('You win!')
    } else if (userChoice['S'] && compChoice['P']) {
        userWins++
        console.log('You win!')
    } else if (userChoice['P'] && compChoice['R']) {
        userWins++
        console.log('You win!')
    } else if (userChoice['R'] && compChoice['P']) {
        userLosses++
        console.log('You lose')
    } else if (userChoice['S'] && compChoice['R']) {
        userLosses++
        console.log('You lose')
    } else (userChoice['P'] && compChoice['S']) {
        userLosses++
        console.log('You lose')
    }

    alert(console.log('Wins: ' + userWins), console.log('Losses: ' 
    + userLosses), ('Ties: ' + userTies))

if (window.confirm("Do you want to play again?"))
}