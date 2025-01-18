// Q1.  Filter even numbers from an array
let numbers = [0, 1, 2, 3, 4, 5, 6, 7];
let evenNum = numbers.filter((num) => {
  return num % 2 == 0;
});
// console.log(evenNum);

//  Q2.Filter names with more than 4 characters
let names = ["Ali", "Umar", "Zuher", "Aaftab", "Tanveer"];
let nameMoreChar = names.filter((name) => name.length > 4);
// console.log(nameMoreChar);

// Q3.Filter students who passed the exam
const students = [
  { name: "Ayaan", marks: 45 },
  { name: "Zoya", marks: 80 },
  { name: "Ali", marks: 32 },
];
let passStu = students.filter((stu) => stu.marks >= 40);
// console.log(passStu);
// Q4.Filter items that are in stock
const items = [
  { name: "Laptop", inStock: true },
  { name: "Mobile", inStock: false },
  { name: "Tablet", inStock: true },
];
const inStockItems = items.filter((item) => item.inStock);
// console.log(inStockItems);

// Q5.Filter numbers greater than 50
const arrNum = [10, 55, 60, 40, 75];
const largeNum = arrNum.filter((num) => num > 50);
// console.log(largeNum)

// Q6
const cars = [
  { company: "Mercedes", type: "Luxury", price: 5000000, madeIn: "Germany" },
  { company: "Toyota", type: "Business", price: 2000000, madeIn: "Japan" },
  { company: "BMW", type: "Luxury", price: 4500000, madeIn: "Germany" },
  { company: "Honda", type: "Business", price: 1800000, madeIn: "Japan" },
  { company: "Rolls Royce", type: "Luxury", price: 10000000, madeIn: "UK" },
  { company: "McLaren", type: "Luxury", price: 8000000, madeIn: "UK" },
  { company: "Bugatti", type: "Luxury", price: 15000000, madeIn: "France" },
  { company: "Ferrari", type: "Luxury", price: 7000000, madeIn: "Italy" },
  {
    company: "Hyundai",
    type: "Business",
    price: 2500000,
    madeIn: "South Korea",
  },
  { company: "Lamborghini", type: "Luxury", price: 9000000, madeIn: "Italy" },
];
const automotiv = cars.filter((car) => {
  return car.price >= 7000000 && car.company == "Rolls Royce";
});
console.log(automotiv);
