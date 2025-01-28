class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.username = username;
    this.email = email;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("cahi", "chai@techer.com", "123");
chai.addCourse();

const iceTea = new User("iceTea");
// iceTea.addCourse()
iceTea.logMe();

// console.log(chai === iceTea); // false
// console.log(chai === Teacher); // false
// console.log(chai instanceof Teacher); // true
console.log(chai instanceof User); // true
