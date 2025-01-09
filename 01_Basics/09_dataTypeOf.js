// what is a type of JS 'Dynamic type' or 'static type' ?
// ====> JavaScript is a Dynamic Type language

// Primitive
// 7 Types: String, Number, Boolean, null, undefind, symbol,
// Bigint

// reference Type (Non Primitive)
// 3 Types: Array, Objects and Functions.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 56556555556556n // BigInt
console.log( typeof bigNumber)

const heros = ["Ironman", "Superman", "Thor"]
console.log(heros)

let myObj = {
    name: "tanveer",
    age: 21,
}
console.log(typeof myObj)

const myFunction = function() {
    console.log("hello word");
}
myFunction()
