// 1. Chick in array num even or odd using for loop
function checkEvenOddNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(`${arr[i]} is Even`);
    } else {
      console.log(`${arr[i]} is Odd`);
    }
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
checkEvenOddNum(arr);
