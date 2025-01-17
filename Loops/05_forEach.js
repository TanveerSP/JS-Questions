// Q1.Print all elements of an array using forEach.
function printElements(colors) {
  colors.forEach((element) => {
    console.log(element);
  });
}
let colors = ["Red", "Green", "Blue"];
// printElements(colors);

// Q2.Multiply each element in an array by 2.
function multiplyEle(number) {
  number.forEach((num, index, arr) => {
    arr[index] = num * 2;
  });
  console.log(number);
}
const number = [1, 2, 3, 4];
// multiplyEle(number);

// ================= Medium ================= //

// Q3.Find the index of a specific value in an array
function findLengthOfObj(names) {
  names.forEach((name, ind) => {
    if (name === "Ahmed") {
      console.log(ind);
    }
  });
}
let names = ["Ali", "Ahmed", "Sara"];
// findLengthOfObj(names);

// Q4. Calculate the total price of items in a cart.
function calcPriceOfCar(cart) {
  let total = 0;
  cart.forEach((item) => {
    total += item.price;
  });
  console.log(total);
}
let cart = [{ price: 10 }, { price: 20 }, { price: 30 }];
// calcPriceOfCar(cart);

// ==================== Hard ================== //

// Q5.Filter even numbers from an array using forEach.
let numbers = [1, 2, 3, 4, 5, 6];
function printEven(numbers) {
  let even = [];
  numbers.forEach((num) => {
    if (num % 2 == 0) {
      even.push(num);
    }
  });
  console.log(even);
}
printEven(number);

let carArr = [
  {
    name: "BMW",
    owner: "Tanveer",
    number: "T313",
  },
  {
    name: "Ferrari",
    owner: "Tanveer",
    number: "P313",
  },
  {
    name: "Toyota",
    owner: "Aaftab",
    number: "K007",
  },
  {
    name: "MaClaren",
    owner: "Aaftab",
    number: "R007",
  },
];

function carDetails(carArr) {
  carArr.forEach((items) => {
    console.log(`${items.owner} car name :-${items.name}`);
  });
}
carDetails(carArr);


