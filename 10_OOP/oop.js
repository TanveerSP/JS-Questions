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
const promiseOne = new Promise()
const date = new Date()

