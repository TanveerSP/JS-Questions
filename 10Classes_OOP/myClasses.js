// In ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("chai", "chai@gmail.com", "123");
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene

function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User1.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

const cofei_aur_coding = new User1("cofei", "cofei@gmail.com", "123");

console.log(cofei_aur_coding.encryptPassword());
// console.log(cofei_aur_coding.changeUsername());
