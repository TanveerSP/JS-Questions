// Q How do you check if a property
// exists in an object, and what are the different methods to do so?
const car = {
    brand: "Toyota",
    model: "Camry",
};

// // Using hasOwnProperty()
// console.log(car.hasOwnProperty('brand'));
// console.log(car.hasOwnProperty('year'));

// // using the 'in' operator
// console.log('model'in car);
// console.log('year'in car);


const phone = {
    brand: "Apple",
    model: "iPhone 16 Max Pro",
    year: 2024-25
}
console.log(phone.hasOwnProperty('year'));
console.log(phone.hasOwnProperty('brand'));
console.log(phone.hasOwnProperty('owner'));
console.log(phone.hasOwnProperty('model'));

console.log('year' in phone);
console.log('brand' in phone);
console.log('owner' in phone);
console.log('model' in phone);