// Create an object with nested properties and access 
// the nested values safely using optional chaining.

const user = {
    fullName: {
        firstName: "Tanveer",
        lastName: "Pathan",
    },
    profile: {
        age: 21,
        address: {
            city: "Mumbai",
            zip: "400001",
        },
    }
}

// Accessing nested properties
console.log(user.fullName.firstName);

// Safely accessing nested properties with optional chaining
console.log(user.profile?.address?.city);

console.log(user.profile?.contact?.phone); // => this line give error becose constact is nod declared
