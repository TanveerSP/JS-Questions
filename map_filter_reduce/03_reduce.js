// Q1.Sum all numbers in an array (Easy)
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumResult = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
// console.log(sumResult);

// Q2.Find the largest number in an array (Easy)
const numbers1 = [10, 25, 35, 50, 40];
const largestNum = numbers1.reduce((max, num) => {
  num > max ? num : max, numbers1[0];
});
// console.log(largestNum);

// Q3.Count the occurrences of each element in an array
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1; // Update the count for the current fruit
  return acc; // Return the accumulator
}, {}); // Initialize the accumulator as an empty object

// console.log(count);

// Q4. Flatten a nested array (Medium)
const nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
// console.log(flat);

// Q5.Create a string of names from an array of objects
// (Hard)
const people = [
  { name: "Ayaan", age: 20 },
  { name: "Zara", age: 22 },
  { name: "Rehan", age: 18 },
];

// I make and Solve Qus

// Q7. find the largest number in array by using reduce method
let arr = [5, 4, 3, 6, 90, 33, 50, 22, 10];
const result = arr.reduce((perviValue, currentValue) => {
  return perviValue > currentValue ? perviValue : currentValue;
});
// console.log(result);

// Q8. Use reduce method and find student that scored 90 marks
let studentMarks = [42, 67, 86, 99, 65, 90];
const scored = studentMarks.reduce((acc, val) => {
  if (val <= 90) acc.push(val);
  return acc;
}, []);
// console.log(scored);

const sumArr = studentMarks.reduce((acc, val) => {
  return acc + val;
});
// console.log(sumArr);

const factor = numbers.reduce((res, val) => {
  return res * val;
}, 1);
// console.log("factory = ", factor);

// =============== Using All fout Arguments ============== //
const num = [1, 2, 3];
const numReslt = num.reduce((acc, val, ind, arr) => {
  console.log(`Index: ${ind}, Value: ${val}, Array: ${arr}, Acc: ${acc}`);
  return acc + val;
}, 0);
console.log(numReslt);

const sum_res = num.reduce( (acc, cur) => acc + cur);
console.log(sum_res)
