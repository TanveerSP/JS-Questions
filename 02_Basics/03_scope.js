// if you write out side of brackets that is Global Scope Variable

// var c = 300;
let a = 300;

// if you write the code inside of (), [] and this {} breakets that is Block scope Variable

if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30
  console.log("Inner: Block Scope a",a)
}

console.log("Outer: Global Scope a",a);
console.log(b);
console.log(c);

