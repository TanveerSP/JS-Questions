// 1. Question: Find if a number is even or odd using if-else

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return `${num} is Even`;
    }
    else {
        return `${num} is Odd`;
    }
}

console.log(checkEvenOdd(5));
console.log(checkEvenOdd(10));

