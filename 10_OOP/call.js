function SetUsername(username) {
  // complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, passwordd) {
  SetUsername.call(this, username);

  this.email = email;
  this.passwordd = passwordd;
}

const chai = new createUser("tanveer", "tanveer@gmail", "123");
console.log(chai);
