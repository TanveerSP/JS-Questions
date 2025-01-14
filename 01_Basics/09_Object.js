// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "tanveer",
  "full name": "Pathan Tanveer",
  [mySym]: "mykey1", // this way to declear symbol in object
  age: 21,
  location: "Ahamadnagar",
  email: "tanveer@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// this is good but not all data like 'full name'
// because object behind the seen use 'String'

// console.log(jsUser.email);

// this type is best for all access object data

// console.log(jsUser["full name"]);

// this way to access Symbol

// console.log(jsUser[mySym])

// how to change value in Object
jsUser.email = "tspathan@gmail.com";

// how to frezee value ( value ko look kare)
// Object.freeze(jsUser);

// console.log(jsUser["email"])

jsUser.email = "tspathanGPT@gmail.com";

jsUser.greeting = function () {
  console.log("Hello Js User");
};

jsUser.greetingTwo = function () {
  console.log(`Hello Js User, ${this.age}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
