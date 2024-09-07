// 1 create an are of cities
// push one citie in cities ("Berlin")
// add element in firt index of an array ("Sydney")
// removi citien in an array ("New York")
// console last two cities
//console all cities

let cities = ["New York", "Delhi", "Mumbai", "Tokyo",]
cities.push("Berlin");
cities.unshift("Sydney");

// console.log(cities);

cities.splice(1, 1); //This is the deleteCount. It tells how many elements 
// should be removed from the cities array starting from the startIndex.
//  Here, 1 means one element will be removed.

let lastTwoCities = cities.slice(-2)
// console.log(cities);
// console.log(lastTwoCities);

// array declare
let listOfStudent = [];
// push method
listOfStudent.push("Tanveer", "Veer", "Ranveer", "Shanveer", "Shamir");
console.log(listOfStudent)
// pop method
let studentRemoved = listOfStudent.pop();
console.log(studentRemoved)
// Unsheft // <--- add data on first index Array
let addAfterStudent = listOfStudent.unshift("Manveer");
console.log("Unsift the array => ", listOfStudent)
// sheft // <--- remove data on last index of Array
let sheftStudent = listOfStudent.shift();
console.log("Sheft the array =>", listOfStudent)
// Slice 
let sliceStudent = listOfStudent.slice(2, 3);
console.log("Slic the array =>", sliceStudent);
// splice
let spliceStudnt = listOfStudent.splice(2, 3);
console.log("Splice the Array =>", spliceStudnt)


listOfStudent.push("John", "Cristan", "Stive", "Tone", "Piter", "Sam");
console.log(listOfStudent)
