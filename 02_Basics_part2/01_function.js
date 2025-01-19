function namePrint() {
  console.log("Tanveer");
}

// namePrint();
// inside of '()' brakets this is parameters
// function addTwoNum(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNum(num1, num2) {
  let result = num1 + num2;
//   console.log("tanveer");
  return result;
}

// inside of '()' brakets this is arguments
const result = addTwoNum(3, 4);

// console.log("result: ", result);

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  } else {
    return `${username} just logged in`;
  }
}

console.log(loginUserMessage("veer"));
