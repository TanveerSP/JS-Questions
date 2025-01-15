// ========================================
// Hard Qustion
// ========================================

// Q1. How does an IIFE help with scope management
//  in JavaScript?
(function () {
  var localVar = "I am local";
  // console.log(localVar);
})();
// console.log(localVar); // ReferenceError: localVar is not defind

// Q2. Can an IIFE return a value? Explain with an example.
let result = (function () {
  return 13 + 17;
})();
console.log(result);

// Q3 How can you use an IIFE to create a private module
// in JavaScript?
const counter = (function () {
  let count = 0; // Private variable
  return {
    increment: function () {
      count++;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
})();
console.log(counter.increment()); //1
console.log(counter.getCount()); //1
