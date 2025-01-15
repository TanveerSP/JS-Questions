// ========================================
// Madium Qustion
// ========================================

// Can you pass parameters to an IIFE? If yes, how?
(function (name) {
    console.log(`My name is, ${name}`);
  })("tanveer");
  
  // What will happen if you do not invoke an IIFE
  // (i.e., leave off the parentheses at the end)?
  (function () {
    console.log("This fun not excute becouse last '()' leave");
  }) // '()' if we not give parentheses then code not excute
  
  