// // Get the button and the span where the click count will be displayed
// const button = document.getElementById('clickButton');
// const clickCountDisplay = document.getElementById('clickCount');

// // Initialize a variable to keep track of the number of clicks
// let clickCount = 0;

// // Function to update the click count
// function updateClickCount() {
//   clickCount++; // Increment the click count
//   clickCountDisplay.textContent = clickCount; // Update the displayed count
// }

// // Add an event listener for the 'click' event
// button.addEventListener('click', updateClickCount);



// Get the button and the span where the result will be displayed
const button = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');

// Initialize a variable to keep track of the total sum
let totalSum = 0;

// The value to add on each click
const valueToAdd = 5;

// Function to update the total sum on each click
function updateClickSum() {
  totalSum += valueToAdd; // Add the predefined value to the total sum
  clickCountDisplay.textContent = totalSum; // Update the displayed sum
}

// Add an event listener for the 'click' event
button.addEventListener('click', updateClickSum);
