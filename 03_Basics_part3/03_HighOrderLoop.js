// for of loop
// ["", "", ""]
// [({}, {}, {})];
function arrNum(arr1) {
  for (const num of arr1) {
    console.log(num);
  }
}
const arr1 = [1, 3, 7, 9];
// arrNum(arr1);

function greetingsWord() {
  for (const greet of greetingst) {
    console.log(`Each char is ${greet}`);
  }
}
const greetingst = "Hello World";
// greetingsWord(greetingst);

// Maps
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

function mapPrint() {
  for (const [key, value] of map) {
    console.log(key, ":-", value);
  }
}
// mapPrint(map);

/* 
// This for of function is not for Object's

function myObject(gameObj) {
  for (const [key, value] of gameObj) {
    console.log(key, ":-", value);
  }
}
const gameObj = {
  game1: "GTA5",
  game2: "COD",
  game3: "Spiderman",
};
myObject(gameObj);
*/


