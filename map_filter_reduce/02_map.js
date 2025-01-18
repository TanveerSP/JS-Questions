// Q1.Multiply each number in an array by 3
const numbers = [2, 4, 6, 8];
const result = numbers.map((num) => num * 3);
console.log(result);

// Q2. Convert an array of temperatures from Celsius to Fahrenheit
// Formula: (C × 9/5) + 32
const celsius = [0, 20, 30, 40];
const temperature = celsius.map((temp) => (temp * 9) / 5 + 32);
console.log(temperature);

// Q3.Add 5 to each number in an array
const numbers1 = [10, 20, 30, 40];
const result1 = numbers1.map((num) => num + 5);
console.log(result1);

// Q4.Extract the first names from an array of objects
const people = [
  { firstName: "Ayaan", lastName: "Khan" },
  { firstName: "Zara", lastName: "Sheikh" },
  { firstName: "Rehan", lastName: "Ali" },
];
const firstName = people.map((fname) => fname.firstName);
console.log(firstName);

// Q5.Capitalize the first letter of each word
const words = ["apple", "banana", "cherry"];
const capitalFirstWord = words.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1)
);
console.log(capitalFirstWord);
