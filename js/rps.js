//js file for rps
// Function to handle the button click for each option
function handleClick(option) {
    // Your logic for handling the option selected
    console.log(`Selected option: ${option}`);
    // Add your game logic here
}

// Add event listeners to each button
document.getElementById('rock').addEventListener('click', function() {
    handleClick('rock');
});

document.getElementById('paper').addEventListener('click', function() {
    handleClick('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
    handleClick('scissors');
});