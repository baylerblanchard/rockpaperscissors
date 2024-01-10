//js file for rps
// Path: js/rps.js
let gameRound = 0;
let isRoundInProgress = false;
let aiAns = ['rock', 'paper', 'scissors'];
let aiPick;
let playerAns;
let playerScore;
let aiScore;
let playAgain = true;
let playerSelection;
let computerSelection;


// Function to handle the button click for each option
function handleClick(option) {
    if (isRoundInProgress) return; // Ignore clicks if a round is in progress
    isRoundInProgress = true;

    // Your logic for handling the option selected
    playerSelection = option;
    computerSelection = aiAns[Math.floor(Math.random() * aiAns.length)];
    displayResults(playerSelection, computerSelection);
    // Add your game logic here
    //playRound(playerSelection, computerSelection);

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

/*function playRound(playerSelection, computerSelection) {
      do{
        console.log('===== New Game =====');
        do{
          //playerAns = getPlayerAns();
          aiPick = getAiAns();
          if (playerAns === 'rock' && aiPick === 'scissors'){
          playerScore++;
          console.log('Player Won The Round!')
          } else if (playerAns === 'rock' && aiPick === 'paper'){
            aiScore++;
            console.log('Ai Won The Round!')
          } else if (playerAns === 'paper' && aiPick === 'rock'){
            playerScore++;
            console.log('Player Won The Round!')
          } else if (playerAns === 'paper' && aiPick === 'scissors'){
            aiScore++;
            console.log('Ai Won The Round!')
          } else if (playerAns === 'scissors' && aiPick === 'paper'){
            playerScore++;
            console.log('Player Won The Round!')
          } else if (playerAns === 'scissors' && aiPick === 'rock'){
            aiScore++;
            console.log('Ai Won The Round!')
          } else {
            console.log('Tie');
          }
            console.log('Player picked: ' + playerAns);
            console.log('AI picked: ' + aiPick);

            console.log('Player: ' + playerScore);
            console.log('AI: ' + aiScore);
          } while (playerScore < 3 && aiScore < 3);
          playAgain = confirm('Play again?');
        } while (playAgain === true);
    }*/

    function displayResults(playerAns, aiAns){
        var results = document.getElementById('result');
        results.innerHTML = 'Player picked: ' + playerAns + '<br>' + 'AI picked: ' + aiAns;
    }

    function displayScore(playerScore, aiScore){
        var score = document.getElementById('score');
        score.innerHTML = 'Player: ' + playerScore + '<br>' + 'AI: ' + aiScore;
    }