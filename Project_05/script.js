// // Function to generate a random color
// const randomColor = function () {
//   const hex = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += hex[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// let intervalId;

// // Start Button
// const startChangingcolor = function () {
//   if (!intervalId) {
//     intervalId = setInterval(changeBgcolor, 1000);
//   }
//   function changeBgcolor() {
//     document.body.style.backgroundColor = randomColor();
//   }
//   console.log("You click Start Button");
// };

// // Stop Button
// const stopChangingColor = function () {
//   clearInterval(intervalId);
//   intervalId = null;
//   console.log("You click Stop Button");
// };

// document.querySelector("#start").addEventListener("click", startChangingcolor);
// document.querySelector("#stop").addEventListener("click", stopChangingColor);

// ============================================================ //
//                       Second Logic
// ============================================================ //

// DOM elements
// let bgColor = document.querySelector("body");
// let startButton = document.querySelector("#start");
// let stopButton = document.querySelector("#stop");

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

//

// Color generator
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    // color += hex[Math.floor(Math.random() * 16)];
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

// console.log(startButton, stopButton);

// Background color change function
let bgcolor = function () {
  document.body.style.backgroundColor = randomColor();
};

let intervalId = null;

// Start Button handler
startButton.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(bgcolor, 1000);
    console.log("You clicked on START button");
  }
});

// Stop Button handler
stopButton.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
    console.log("You clicked on STOP button");
  }
  intervalId = null; // Reset intervalId
});
