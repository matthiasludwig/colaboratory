let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => { return Math.floor((Math.random() * 10));}
/* For Testing
const generateTarget = () => { return 0;}
*/

function compareGuesses(currentHumanGuess, computerGuess, target) {
    humanDeviation = Math.abs(target - currentHumanGuess);
    computerDeviation = Math.abs(target - computerGuess);

    if (humanDeviation < computerDeviation) {
        return true;
    }
    else {
        return false;
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    }
    else {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}