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
};
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// console.log(Object.getOwnPropertyDescriptor(chai, 'price'));
// console.log(Object.getOwnPropertyDescriptor(chai, 'isAvailable'));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
