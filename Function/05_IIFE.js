//  Immediately Invoked Function Expression (IIFE)

// Q1: What is an IIFE in JavaScript, and how is it written?
(function() {
    console.log("This is an IFFE");
})();

// Q2:
(function() {
    var secret = "This is hidden";
    console.log(secret);
}) ();

// Q3:
(function(name) {
    console.log("Hello " + name);
})("Tanveer");

// Q4: 
var result = (function() {
    return 10 + 20;
}) ();
console.log(result);

(() => {
 console.log("IIFE with arrow function");
}) ();


(function addTwoNum() {
    return  10 + 33
}) ();

(function printNumName(a,b) {
    console.log(a + " " + b)
})("Tanveer", 55);

