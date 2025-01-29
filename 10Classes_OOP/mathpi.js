const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5;

// factory func
// const mynewObject = Object

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("chai nahi bane");
  },
};
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// console.log(Object.getOwnPropertyDescriptor(chai, 'price'));
// console.log(Object.getOwnPropertyDescriptor(chai, 'isAvailable'));

Object.defineProperty(chai, "name", {
//   writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// if we try to access inside value of this Obj then he gives error this is not itreable
// for (let [key, value] of chai){
//     console.log(`${key} : ${value}`);
// }

//  How to access ? access like that
for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
   


