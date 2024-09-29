// Question: Given an array of user objects,
// find the user with a specific email.

const users = [
    { id: 1, email: "empAtMicrosoft@gmail.com" },
    { id: 2, email: "empAtGoogle@gmail.com" },
    { id: 3, email: "empAtAmazone@gmail.com" },
    { id: 4, email: "empAtNetflix@gmail.com" }
]

// Finding a user by email
const targetEmail = "empAtMicrosoft@gmail.com";
const foundUser = users.find(user => user.email === targetEmail);

console.log(foundUser);
// Output { id:1, email:'empAtMicrosoft@gmail.com'}

const findEmail = "empAtGoogle@gmail.com";
const prisentEmail = users.find(user=> user.email === targetEmail);

//================================================================================ //
// Add a new property to an existing object and modify an existing property.
//  What happens if the object is declared with const?

