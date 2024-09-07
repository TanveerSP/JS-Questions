/*
let fruits = ["Apple","Banana","Chairy","DrigonFruit","Mango", "Orange"];

// 1. push() - Add an element to the end of the array
fruits.push("Painapple")
console.log("After Add new Fruite =>",fruits)

// 2. pop() - Remove the last element from the array
let poppedFruit = fruits.pop();
console.log("popped element =>", poppedFruit)


// 3. unshift() - Add elements to the beginning of the array
fruits.unshift("Grapes", "Strawberry");
console.log("After use Unshift =>", fruits)

// 4. shift() - Remove the first element from the array
fruits.shift()
console.log("After Remove First element of Array => ", fruits)

// 5. splice() - Remove and insert elements at a specific index
let splicedFruits = fruits.splice(2, 2, "Peach", "Kiwi");
console.log("After splice (removal and insert):", fruits); 
console.log("Spliced elements (removed):", splicedFruits); // ["Banana", "Chairy"]

// 6. slice() - Create a subarray without modifying the original array
let subFruits = fruits.slice(2,5);
console.log("Befor sub array", fruits)
console.log("After create sub Array ",subFruits)

// 7. includes() - Check if an element exists in the array
let checkFruits = fruits.includes("Mango");
console.log(checkFruits)

// 8. indexOf() - Find the index of an element in the array
let findFruit = fruits.indexOf("Peach");
console.log("Index of you Search Frute => ",findFruit);

// Final state of the array
console.log(fruits)

*/

let phones = ["Apple","Oppo","Google Pixel","Xiaomi","Vivo"];
console.log("Oregnal Array => ",phones);

// push "IQOO";
phones.push("IQOO");
console.log("After push Item in Org Arr => ", phones)

// pop Item in phones
let popItem = phones.pop()  // remove 'IQOO' in the array
console.log("After pop Item in Org Arr => ",phones)
console.log("popped Item in phone => ",popItem)

// unshift Item "OnePluse"
phones.unshift("OnePluse") // Add Item in Array first Index
console.log("After unshift Item on first index on array",phones); 

phones.shift();
console.log("Remove first index Item in Array => ",phones);

// ============ splice modify the real array =============== //
let spliceItme = phones.splice(2,2, "realme","Honer"); // Remove array index Item, and replace with this Items "Honer","Realme"
console.log("Removed Item Array => ",spliceItme);
console.log("After Removed and Add new Item in Array => ",phones);

// =============== slice is createting ============== //
let sliceItme = phones.slice(3,5); // Create a subarray without modifying the original array
console.log("slice Item in Array => ", sliceItme) 
console.log("Oregnal Array => ",phones);

let includesItem = phones.includes("Oppo")
console.log("Check Item is Present or Not => ",includesItem);
console.log("Oregnal Array => ", phones);

let indexOfItem = phones.indexOf("Oppo");
console.log("Show index no of you search in Array if present",indexOfItem);

// Final State of array
console.log(phones);
