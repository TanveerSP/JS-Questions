// Q1.Print all elements of an array using a for...of loop.
function printAllEle(fruts) {
  for (const item of fruts) {
    console.log(item);
  }
}
let fruts = ["Apple", "Banana", "Mango"];
// printAllEle(fruts);

// Q2. Find the sum of all numbers in an array
// using for...of.
function sumAllNum(numbers, sum) {
  for (const number of numbers) {
    sum += number;
  }
  console.log(sum);
}
const numbers = [1, 2, 3, 4];
const sum = 0;
// sumAllNum(numbers, sum);

// =========== Medium ========== //

//Q3.Count vowels in a string using for...of.
function countVowels(stri, vowels, count) {
  for (const char of stri) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  console.log(`Vowels count is :- ${count}`);
}
const stri = "javaScript";
const vowels = "aeiouAEIOUS";
let count = 0;
// countVowels(stri, vowels, count);


//Q4.Find all odd numbers in an array using for...of.
function findOdd(num, oddNumbers) {
  for (const ele of num) {
    if (ele % 2 !== 0) {
      oddNumbers.push(ele);
    }
  }
  console.log(oddNumbers);
}
const num = [10, 15, 20, 25, 30];
let oddNumbers = [];
findOdd(num, oddNumbers);


// =============== hard Qus ==================== //
// Q5.Filter even numbers from an array using forEach.
function findEven(num, evenNumbers) {
  for (const ele of num) {
    if (ele % 2 === 0) {
      evenNumbers.push(ele);
    }
  }
  console.log(evenNumbers);
}
let evenNumbers = [];
findEven(num, evenNumbers);





// ============== Comebian Qus by my side =============== //
function findOddAndEven(num, oddNumbers, evenNumbers) {
  for (const elem of num) {
    if (elem % 2 !== 0) {
      oddNumbers.push(elem);
    } else if (elem % 2 == 0) {
      evenNumbers.push(elem);
    }
  }
  console.log("This Array hold Even Numbers :-", evenNumbers);
  console.log("This Array hold Odd Numbers:-", oddNumbers);
}
// findOddAndEven(num, oddNumbers, evenNumbers);
