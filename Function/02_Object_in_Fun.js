// Q1 Write a function displayUserInfo that accepts an object containing name and age, then logs a message like "User's name is [name] and age is [age]".
const userDetails = {
    username: 'Tanveer',
    age: 21,
}
function displayUserInfo(userInfo) {
    console.log(`User's name is "${userDetails.username}" and age is "${userDetails.age}"`)
}
// displayUserInfo(userDetails);

// Q2 Create a function calculateTotalCost that accepts an object with productPrice and shippingFee. The function should return the total cost (sum of productPrice and shippingFee).
const calculateTotal = {
    productPrice: 420,
    shippingFee: 80,
}
function calculateTotalCost(calculateTotal) {
    return calculateTotal.productPrice + calculateTotal.shippingFee;
}
// console.log(calculateTotalCost(calculateTotal))

// Q3 Write a function updateUsername that changes the username property of a passed object to "newUser".
const user = {
    username: "oldName",
    price: 490,
};
function updateUsername( oldUserName) {
    oldUserName.username = " NewUserName"
}
// updateUsername(user);
// console.log(user);

const car = {
    carname: "Thar",
    modelno: 53124520
}
function updateModelNo(carModelNo) {
    carModelNo.modelno = 44994455
}
// updateModelNo(car);
// console.log(car);

// Q4 Create a function hasProperty that accepts an object and a property name as parameters. The function should return true if the property exists in the object, otherwise return false.

const product = { names: 'Laptop', price: 1000 };
function hasProperty(obj, propName) {
   return obj.hasOwnProperty(propName);
}
// console.log(hasProperty(product,'names'));
// console.log(hasProperty(product,'descound'));

const course = {
    name: 'Java',
    // newdate: '22 nov 2024',
    price: 2990,
    expdate: '23 dec 2025'
}
function courseProperty(courseObj, innerProp) {
   return courseObj.hasOwnProperty(innerProp);
}
// console.log(courseProperty(course,'name'));
// console.log(courseProperty(course,'newdate'));
// console.log(courseProperty(course,'price'));

// Q5 Write a function getObjectKeys that accepts an object and returns an array of its keys.

const student = {
    id: 101,
    name: "Tony",
    age: 22,
    class: 'B Tech cs',
}

function getObjectKeys(stuObj) {
  return Object.keys(stuObj);
}

console.log(getObjectKeys(student))

const emp = {
    id: 109,
    name: "Charly",
    post: "Web Dev"
}

function getEmpValue (empObj) {
    return Object.values(empObj);
}
console.log(getEmpValue(emp))