// Write a function to add two numbers and print in function  --- Done
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2) //80
};
addTwoNumbers(25, 55);

// Write a Function divi a two numbers and return in function   --- Done
function divTwoNumbers(numOne, numTwo) {
    return numOne - numTwo;
}
const result = divTwoNumbers(100, 37);
console.log(result); // 63

// Give you tow numbers 199 and 490, Write a function add this two numbers in 'total' and print 'total'   --- Done
function courseBuy(course1, course2) {
    const total = course1 + course2;
    console.log(total) // 689
}
courseBuy(199, 490);

// write a function to retrun a multi value and outside of function clg value this output undefind ---- Done
function multiTwoNum(a1, b1) {
    console.log(a1 * b1); // 2739
}
const outPut = multiTwoNum(33, 83);
console.log("Out Put is: ", outPut); // Show in out put undefined
