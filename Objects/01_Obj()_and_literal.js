// Question 1: How do you create an object using a constructor function in JavaScript
function User(name,age){
    this.name = name;
    this.age = age;
};
const user1 = new User("Tanveer", 21);
console.log(user1);

// Question 2: How can you add a method to an existing object?
const person = {
    name: "Tanveer"
};
person.greet = function() {
    return ` Hello, ${this.name}!`;
};
console.log(person.greet());

// Question 3: How can you loop through the properties of an object?
const user = {
    name: "Tanveer",
    age: 21,
    location: "Ahmadnagar"
};
for(let key in user){
    console.log(`${key}: ${user[key]}`);
}