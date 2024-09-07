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
