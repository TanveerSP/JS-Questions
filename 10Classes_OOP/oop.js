// Object letterl

const user = {
  username: "tanveer",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("hello");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

//  =================================== //
// constructor functions
//  =================================== //

// 'new' is a constructor function
// 'new' keyword use to create new context for there variable
// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    // leftside username is a variable and rightside username is 'passed in function' 
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`welcome ${this.username}`);
    }

    return this // if we dont defi return this 
    // this is implicetly defind
}

// if we call function like that then function is "overide" that way use "new" keyword
// const userOne = User("tanveer",12,true);
// const userTwo = User("CodeWithveer",11,false)
// console.log(userOne);

// use new keyword
const userOne = new User("tanveer",12,true);
const userTwo = new User("CodeWithveer",11,false) 
console.log(userOne.constructor);
// console.log(userTwo);

// Notes about 'new' keyword :-
// 1) jab hum new keyword ka use karte hai to ek empty Object create hota hai jisko instence kaha jata hai
// 2) constructor function call hota hai jub muh new keyword declear karte hai
// 3) this keyword inject ho jata hai
// 4) hum ko function me mil jata hai