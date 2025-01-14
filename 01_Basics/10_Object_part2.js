//  const tinderUser = new Object() // Singletone Obj
const tinderUser = {}; // Non-Singletone Obj

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "tanveer",
      lastname: "pathan",
    },
  },
};

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};

// const objCombian = { obj1, obj2 }
// const objCombian = Object.assign({}, obj1, obj2) // thi way combain to object in one
// console.log(objCombian)

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "t@gmail.com",
  },
  {
    id: 2,
    email: "t@gmail.com",
  },
  {
    id: 3,
    email: "t@gmail.com",
  },
  {
    id: 4,
    email: "t@gmail.com",
  },
];

users[1].email;


console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));

