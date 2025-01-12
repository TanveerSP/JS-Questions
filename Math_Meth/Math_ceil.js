// Q1  What function would you use to round a number up to the next integer?
// console.log(Math.ceil(8.4));
// console.log(Math.ceil(-3.4));

// Q2 
console.log(Math.ceil(10));

// Q3 
console.log(Math.ceil(4.7));

// Q4 
const number = [1,2,3,4,5,6,7,8,9] 
const result = number.map(Math.ceil);
console.log(result);

// Q5 

function sumCeilValues(arr) {
    return arr.reduce((sum, num) => sum + Math.ceil(num), 0);
}
console.log(sumCeilValues([2.3,3.8,1.1]));