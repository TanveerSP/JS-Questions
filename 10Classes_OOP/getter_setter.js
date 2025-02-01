class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return this._password.toUpperCase();
    // return `${this._password}tanveer`
  }
  set password(value) {
    this._password = value;
  }
}

const tanveer = new User("tanveer@google.email", "abc1xyz");
console.log(tanveer.password);
console.log(tanveer.email);
