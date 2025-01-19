// Q1.Check if an object is empty or non-empty.
let empObj = {};
if (Object.keys(empObj).length === 0) {
  console.log("This Object is empty");
} else {
  console.log("This Object is not empty");
}

// Q2.Check if an object has a specific property.
let proObj = { name: "veer", age: 21 };
if ("name" in proObj) {
  console.log("name is present in Obj");
} else {
  console.log("name is not present in Obj");
}

// Q3 Check if a property in an object is truthy or falsy.
let checkObj = {
  isActive: false,
  isLoggedOut: true,
};
if (checkObj.isActive) {
  console.log("The user is not Active");
} else if (checkObj.isLoggedOut) {
  console.log("The user is logged out");
} else {
  console.log("Code is Working");
}

//  Q4 Check the type of a value in an object.
let obj = { id: 101 };
if (typeof obj["id"] === "number") {
  console.log("This object 'id' type is number ");
} else {
  console.log("This object 'id' type is not a number");
}
