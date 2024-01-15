//js file for rps
// Path: js/rps.js
let gameRound = 0;
let isRoundInProgress = false;
let aiAns = ['rock', 'paper', 'scissors'];
let aiPick;
let playerAns;
let playerScore = 0;
let aiScore = 0;
let playAgain = true;
let playerSelection;
let computerSelection;
let score = document.getElementById('score');


// Function to handle the button click for each option
function handleClick(option) {
    if (isRoundInProgress) return; // Ignore clicks if a round is in progress
    isRoundInProgress = true;

    // Your logic for handling the option selected
    playerSelection = option;
    computerSelection = aiAns[Math.floor(Math.random() * aiAns.length)];
    displayResults(playerSelection, computerSelection);

    // Add your game logic here
    playRound(playerSelection, computerSelection);
    displayResults(playerSelection, computerSelection);
    if (playerSelection === computerSelection) {
        score.innerHTML = 'This round is a Draw!';
        } else {
            displayScore(playerScore, aiScore);
        }

    if (playerScore === 5){
        score.innerHTML = 'You win!';
        playerScore = 0;
        aiScore = 0;
    } else if (aiScore === 5){
        score.innerHTML = 'AI wins!';
        playerScore = 0;
        aiScore = 0;
    }

    // Simulate delay for game logic (replace this with actual game logic)
    setTimeout(() => {
        // Increment the game round
        gameRound++;
        isRoundInProgress = false;

        // Enable buttons for the next round
        enableButtons();
    }, 1000);
}

// Function to enable buttons for the next round
function enableButtons() {
    // Enable buttons after a delay (you can modify the delay as needed)
    setTimeout(() => {
        document.getElementById('rock').disabled = false;
        document.getElementById('paper').disabled = false;
        document.getElementById('scissors').disabled = false;
    }, 1000);
}

// Add event listeners to each button
document.getElementById('rock').addEventListener('click', function() {
    if (isRoundInProgress) return;
    document.getElementById('rock').disabled = true; // Disable button after click
    handleClick('rock');
});

document.getElementById('paper').addEventListener('click', function() {
    if (isRoundInProgress) return;
    document.getElementById('paper').disabled = true; // Disable button after click
    handleClick('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
    if (isRoundInProgress) return;
    document.getElementById('scissors').disabled = true; // Disable button after click
    handleClick('scissors');
});

function getAiAns(){
    return aiAns[Math.floor(Math.random() * aiAns.length)];
  }

function playRound(playerSelection, computerSelection) {
    var score = document.getElementById('score');

        if (playerSelection === computerSelection) {
            score.innerHTML = 'It\'s a tie!';
            } else if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
            aiScore++;
            } else {
            playerScore++;
            }
            } else if (playerSelection === 'paper') {
            if (computerSelection === 'scissors') {
            aiScore++;
            } else {
            playerScore++;
            }
            } else if (playerSelection === 'scissors') {
            if (computerSelection === 'rock') {
            aiScore++;
            } else {
            playerScore++;
            }
            }
        }
function displayResults(playerAns, aiAns){
        var results = document.getElementById('result');
        results.innerHTML = 'You picked: ' + playerAns + '<br>' + 'AI picked: ' + aiAns;
}

function displayScore(playerScore, aiScore){
        var score = document.getElementById('score');
        score.innerHTML = 'You: ' + playerScore + '<br>' + 'AI: ' + aiScore;
}