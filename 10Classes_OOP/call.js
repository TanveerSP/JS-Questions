// function SetUsername(username) {
//   // complex DB calls
//   this.username = username;
//   console.log("called");
// }

// function createUser(username, email, passwordd) {
//   SetUsername.call(this, username);

//   this.email = email;
//   this.passwordd = passwordd;
// }

// const chai = new createUser("tanveer", "tanveer@gmail", "123");
// console.log(chai);

function Setusername(username) {
  this.username = username;
  console.log("called");
}
function createUser(username, email, password) {
  Setusername.call(this, username);

  this.email = email;
  this.password = password;
}

//
const chai = new createUser("tanveer", "tanveer@openAigmail.com", "222");
console.log(chai);
