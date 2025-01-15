// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  // this is named IIFE
  console.log(`DB Connected`);
})();

((name) => {
  // simple IIFE
  console.log(`DB connected Two ${name}`);
})("veer");
