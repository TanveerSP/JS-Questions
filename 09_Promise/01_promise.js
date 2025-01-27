// How to create promise
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task

  // DB Calls, cryptography, network

  setTimeout(() => {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task two");
  }, 1000);
}).then(function () {
  console.log("Async two resolve");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "tanveerpathan023gamil.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // let error = true;
    let error = false;
    if (!error) {
      resolve({ username: "veer", password: "123" });
    } else {
      reject("Error : somting is wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("The Promise is either resolve");
  });

const promiseFive = new Promise(function (res, rej) {
  setTimeout(() => {
    // let error = false;
    let error = true;
    if (!error) {
      res({ username: "tanveer", password: "123" });
    } else {
      rej("Error: Sommthing went wrong");
    }
  }, 1000);
});

async function consumPromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

consumPromiseFive();

async function getAllUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("E: ", err);
  }
}
// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
