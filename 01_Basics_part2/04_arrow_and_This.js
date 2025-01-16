const user = {
  username: "tanveer",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} welcome to website`);
    console.log(this);
  },
};
// user.welcomeMessage()
// user.username = "sam",
// user.welcomeMessage();

// console.log(this);

function chai() {
  let username = "veer";
  console.log(this.username);
}
// chai()

// const one1 = function() {
//     let username = "tanveer"
//     console.log(this.username);
// };

// =============== Arrow fun ==================

const arrow = () => {
  let username = "tanveer";
  // console.log(this.username);
  console.log(this);
};

// arrow();

// this is arrow function
const addTwo = (num1, num2) => {
  return num1 + num2;
};
// console.log(addTwo(4, 6));

// This is implicet arrow function // in this case don't use  return
const addThree = (num1, num2, num3) => num1 + num2 + num3;
// console.log(addThree(3, 4, 5));

// const addcouple = (num1, num2) => (num1 + num2)

// if we retrun object in arrow function than use {} curle breces
const addcouple = (num1, num2) => ({
  username: "tanveer",
});

console.log(addcouple(5, 5));

// const myArray = [2, 4, 6, 8, 10];
// myArray.forEach(()=> )
