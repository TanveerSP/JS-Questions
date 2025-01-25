// Function to generate a random color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// DOM elements
let bgColor = document.querySelector("body");
let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");

// let intervalId = null;

// // Function to change the background color
// let changeColor = function () {
//   bgColor.style.backgroundColor = randomColor();
// };

// // Event listener for the "Start" button
// startButton.addEventListener("click", function () {
//   if (!intervalId) { // Ensure only one interval runs at a time
//     intervalId = setInterval(changeColor, 2000);
//   }
// });

// // Event listener for the "Stop" button
// stopButton.addEventListener("click", function () {
//   if (intervalId) {
//     clearInterval(intervalId);
//     intervalId = null; // Reset the interval ID
//   }
// });
