// Select HTML elements for displaying the timer and control buttons
let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

// Initialize timer values for milliseconds, seconds, and minutes
let msec = 00;
let secs = 00;
let mins = 00;

// Variable to store the timer interval ID
let timerId = null;

// Event listener for the Start button
startBtn.addEventListener('click', function() {
    // Clear any existing timer interval before starting a new one
    if (timerId !== null) {
        clearInterval(timerId);
    }
    // Start the timer and update it every 10 milliseconds
    timerId = setInterval(startTimer, 10);
});

// Event listener for the Stop button
stopBtn.addEventListener('click', function() {
    // Stop the timer by clearing the interval
    clearInterval(timerId);
});

// Event listener for the Reset button
resetBtn.addEventListener('click', function() {
    // Stop the timer
    clearInterval(timerId);
    // Reset the display to 00 : 00 : 00
    timerDisplay.innerHTML = `00 : 00 : 00`;
    // Reset timer values to zero
    msec = secs = mins = 00;
});

// Function to start and run the timer
function startTimer() {
    // Increment milliseconds
    msec++;
    // If milliseconds reach 100, reset to 0 and increment seconds
    if (msec == 100) {
        msec = 0;
        secs++;
        // If seconds reach 60, reset to 0 and increment minutes
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    // Format values to always show two digits (e.g., 01, 09)
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    // Update the display with the current time
    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}