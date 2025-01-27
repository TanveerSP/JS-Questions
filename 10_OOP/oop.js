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

    // return this // if we dont defi return this 
    // this is implicetly defind
}

// if we call function like that then function is "overide" that way use "new" keyword
// const userOne = User("tanveer",12,true);
// const userTwo = User("CodeWithveer",11,false)
// console.log(userOne);

// use new keyword
const userOne = new User("tanveer",12,true);
const userTwo = new User("CodeWithveer",11,false) 
// console.log(userOne);
// console.log(userTwo);

