// if you write out side of brackets that is Global Scope Variable

// var c = 300;
let a = 300;

// if you write the code inside of (), [] and this {} breakets that is Block scope Variable

if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30
  // console.log("Inner: Block Scope a",a)
}

// console.log("Outer: Global Scope a",a);
// console.log(b);
// console.log(c);



function one() {
  const username = "tanveer";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one();

if (true) {
  const username = "veer";

  if (username === "veer") {
    const website = " youtube";
    // console.log(username + website);
  }

  // console.log(website);
}
// console.log(username);

// *****************  interesting  *********************

console.log(addone(5));
function addone(num) {
  return num + 1;
}

addTwo(5);
// this fun is hoisting
const addTwo = function (num) {
  return num + 2;
};

