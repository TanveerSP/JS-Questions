// Q1.Print all properties of an object using for...in.
function printAllPro(person) {
  for (const key in person) {
    console.log(key);
  }
}
let person = { name: "TanveerAli", age: 25, city: "Pune", password: "1234" };
// printAllPro(person);

// Q2.Print all key-value pairs in an object.
function printKeyAndValue(person) {
  for (const key in person) {
    console.log(`${key} :- ${person[key]}`);
  }
}
// printKeyAndValue(person);

// ================= Medium =============== //
// Q3.Find the length of an object.
function findLengthOfObj(car, length) {
  for (const key in car) {
    length++;
  }
  console.log(length);
}
let length = 0;
let car = { make: "Toyota", model: "Corolla", year: 2020 };
// findLengthOfObj(car, length);

// Q4.Check if an object has a specific key.
function keyCheck(person) {
  let keyToCheck = "password";
  let exists = false;
  for (let key in person) {
    if (key === keyToCheck) {
      exists = true;
      break;
    }
  }
  console.log(exists);
}
keyCheck(person);

// =================== Hard ======================= //
// Q5.Copy all key-value pairs from one object to another.

function copyObjToAnother(source, target) {
  for (let key in source) {
    target[key] = source[key];
  }
  console.log(target);
}
let source = { a: 1, b: 2, c: 3 };
let target = {};
copyObjToAnother(source, target);
