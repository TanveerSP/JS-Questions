// Array

const myArr = [0, 1, 2, 3, 4, 5, 9];
const myHeros = ["Thor", "Ironman", "Superman", "Batman"];
// console.log(myArr[1]);

const myArr2 = new Array(1, 2, 3, 4);

// myArr.push(6);
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9)); // check present give number
// console.log(myArr.indexOf(3))

const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);

// slice and splice
console.log("A", myArr);
const myn1 = myArr.slice(1, 3); // second nahi aata hai
console.log(myn1);

console.log("after slice array",myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("after splice array",myArr);

// slice is not make any changes in array

// splice manipulate orgnal array, 
// splice make a changes in real array