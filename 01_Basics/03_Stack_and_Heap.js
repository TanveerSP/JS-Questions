// Ther are two type of memory

// 1) stack : if we use (Primiteve) dataType then this
// store in stack
// agar hum stack use karte hai to huma uska copy milta hai

// 2) Heap : if we use (non-primitive) then  data store in
// Heap
// ager hum Heap use karte hai to huma vaha se oregnal refrence
//  milta hia


// Stack Example

let myYoutubeName = "tanveerPathan";

let anothername = myYoutubeName;
anothername = "tech tanu"

console.log(myYoutubeName);
console.log(anothername);


// Heap Example

let userOne = {
    email: "user@google.com",
    upi: "user@mail",
}

let userTwo = userOne;
userTwo.email = "user@googly.mol"

console.log(userOne);
console.log(userTwo)
