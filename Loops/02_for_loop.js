// 2. Chick in array num even or odd using for loop
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
// checkEvenOddNum(arr);

// Q1. Write a for loop to print numbers from 1 to 5.
function print1To5(input) {
  for (let i = 1; i <= input; i++) {
    console.log(i);
  }
}
// print1To5(5);

// Q2.  Write a for loop to calculate the sum of even numbers between 1 and 10.
function calcSumOfEven(input, sum) {
  for (let i = 1; i <= input; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  console.log(sum);
}
// calcSumOfEven(100, 0);

// Q3. Given an array const fruits = ['apple', 'banana', 'cherry'],
//  write a for loop to print each fruit in uppercase.

function nameToUppercase(fruits) {
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase());
  }
}

fruits = ["apple", "banana", "cherry"];
// nameToUppercase(fruits);

// Q4. Write a for loop to create a pyramid pattern of
//  stars (*) with 5 rows:
function pritntPattern(input) {
  for (let i = 1; i <= input; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}
pritntPattern(5);
