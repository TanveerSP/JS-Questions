// Q1.Check if an array is empty or non-empty.
let arr = [];
if (arr.length == 0) {
  console.log("Array is an Empty");
} else {
  console.log("Array is not Empty");
}

// Q2.Check if an element exists in an array.
let arr2 = [1, 2, 3, 4];
let element = 3;
if (arr2.includes(element)) {
  console.log("The element exists in the array");
} else {
  console.log("The element does not exist in the array");
}

// Q3.Check if an array has more than 5 elements.
let arr3 = [1, 2, 5];
if (arr3.length > 3) {
  console.log("Array has more then 5 elements");
} else if (arr3.length == 5) {
  console.log("Array has exactly 5 elements");
} else {
  console.log("Array has less then 5 elements");
}

// Q4.Check if the first element of an array is even or odd.
let arry4 = [2, 3, 4];
if (arry4[0] % 2 === 0) {
  console.log("this first element is Even");
} else {
  console.log("this first element is Odd");
}

// Q5.Check if all elements of an array are numbers.
let arr5 = [2, 4, "tanveer"];
if (arr5.every((el) => typeof el === "number")) {
  console.log("All element are number.");
} else {
  console.log("Not all element are number.");
}
