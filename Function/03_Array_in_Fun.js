// Q1 Write a function findMaxNumber that accepts an array of numbers and returns the maximum number.

const numArr = [12, 23, 34, 45];

function findMaxNumber(number) {
    return Math.max(...number)
}

// console.log(findMaxNumber(numArr)) // Output is: 45

const newNumArr = [10, 20, 30, 40, 50];
function findMaxNum(arrNum) {
    return Math.max(...arrNum);
}
// console.log(findMaxNum(newNumArr));

// Q2 Create a function sumArray that accepts an array of numbers and returns the sum of all elements.

const arr = [5, 10, 15];
function sumArray(sumArr) {
    return sumArr.reduce((acc, curr) => acc + curr, 0) // Yeh line array ke saare elements ka sum return karti hai by using reduce(),
    // jisme accumulator (acc) aur current value (curr) ko add kiya jaata hai, starting from 0.
}
// console.log(sumArray(arr));

// Q4 Write a function findElementIndex that takes an array and an element, returning the index of the element in the array.
const frutes = ['Apple', 'Banana', 'Mango', 'Bery'];
function findElementIndex(arr, ele) {
    return arr.indexOf(ele);
}
// console.log(findElementIndex(frutes, 'Mango'));

function findCarInd(arr, ele) {
    return arr.indexOf(ele);
}
const cars = ['Mahendra', 'Tata', 'BMW', 'Ferare', 'Bugathi'];
console.log(findCarInd(cars, 'Tata'));
console.log(findCarInd(cars, 'Bugathi'));
console.log(findCarInd(cars, 'Ferare'));