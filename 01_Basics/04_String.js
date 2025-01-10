const name = "tanveer";
const repoCount = 50;

// this is old type to concatenate string
// console.log(name + repoCount + "value");

// this is moder way to concatenate string
console.log(`Hello my name is ${name} and my repo cout is ${repoCount}`);

console.log(typeof name);

// IMP String Methods :=>
/*
1) charAt()  
2) concat()
3) includes()
4) indexOf()
5) slice()
6) toLowerCase() and toUpperCase()
7) trim()
8) split()
9) replace() and replaceAll()
10) substring(start, end)       
*/

console.log(name.length);
console.log(name.toUpperCase());

console.log(name.charAt(3));

console.log(name.indexOf("r"));

let gameName = "callOfDuty_Pubg";
const newString = gameName.substring(0, 4);
console.log(newString);

const newStr = gameName.slice(0, 8);
console.log(newStr);

const secStr = "   tanveer ";
console.log(secStr); // print org string
console.log(secStr.trim()); // remove extra spces 
