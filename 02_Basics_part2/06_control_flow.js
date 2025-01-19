// 1 if

// if(condition){
// }

const isUserLoggedIn = true;
const temperature = 41;

// if (isUserLoggedIn) {
//   isUserLoggedIn == true;
//   console.log("user is logged In ");
// }

// if (temperature < 50) {
//   console.log("less than 50");
// } else {
//   console.log("temperature is greater than 50");
// }

// if (2 != 5) {
//   console.log(" is not equal");
// }

// if (2 === "2") {
//   console.log("executed");
// } else {
//   console.log(`Data type is deferent`);
// }

// < less then
// > gretar then
// <== less then and equal
// >== greter then and equal
// == equals to
// != // 2 != 3  'kya 2 ke barabr equal nahi hai'
// === // strict equal 'check value and also data type'

// const score = 200;
// if(score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// shot hand notation
// const balance = 100;
// if (balance > 500) console.log("test"),console.log("test 2")

// const balance = 1300;
// if (balance < 500) {
//   console.log("less than");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("gerter than 900");
// } else {
//   console.log("greter than 1200");
// }

const debitCard = true
const loggedInFromGoogle = false;
const loggedInFromEmail = true 

if(isUserLoggedIn && debitCard && 2==2 ) {
    console.log("allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log(`User loggd In `)
}