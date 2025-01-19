// Q1. Access the location and lastLoginDays properties from
// the jsUser object in two different ways and log them to the console.

const myNewSym = Symbol("__");

const jsUser = {
  location: "Pune",
  job: "Frontend Developer",
  isLoggedIn: false,
  lastLoginDays: ["Montday", "Sunday"],
  [myNewSym]: "__"
};

console.log(jsUser.lastLoginDays);
console.log(jsUser["location"]);

// Q2. Change the isLoggedIn property of the jsUser object
// to true and log the updated object.
jsUser.isLoggedIn = true;
console.log(jsUser["isLoggedIn"]);

// Q3. Question: Add a new property role with the value "admin"
//  to the jsUser object and log the updated object.
jsUser.role = "admin";
console.log(jsUser["role"]);

// Q4. Freeze the jsUser object so its properties cannot be modified
//  or added. Then, try to change the age property to 25 and log the result.
Object.freeze(jsUser);
jsUser.age = "21";
console.log(jsUser.age);


// Q5. Create a new symbol myNewSym and add it as a property to jsUser
//  with the value "newSymbolValue". Then, write a
//  method inside jsUser to log all property keys (including symbols) and their values.
console.log(jsUser[myNewSym]);