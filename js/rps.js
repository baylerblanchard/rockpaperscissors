//js file for rps
// Path: js/rps.js
let gameRound = 0;
let isRoundInProgress = false;

// Function to handle the button click for each option
function handleClick(option) {
    if (isRoundInProgress) return; // Ignore clicks if a round is in progress
    isRoundInProgress = true;

    // Your logic for handling the option selected
    console.log(`Selected option: ${option}`);
    // Add your game logic here

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
