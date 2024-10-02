// Q1 Write a function findMaxNumber that accepts an array of numbers and returns the maximum number.

const numArr = [12,23,34,45];

function findMaxNumber(number) {
   return Math.max(...number)
}

// console.log(findMaxNumber(numArr)) // Output is: 45

const newNumArr = [10,20,30,40];
function findMaxNum(arrNum) {
    return Math.max(...arrNum);
}
console.log(findMaxNum(newNumArr));

// Q2 Create a function sumArray that accepts an array of numbers and returns the sum of all elements.