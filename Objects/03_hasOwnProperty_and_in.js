// Q How do you check if a property
// exists in an object, and what are the different methods to do so?
const car = {
    brand: "Toyota",
    model: "Camry",
};

// Using hasOwnProperty()
console.log(car.hasOwnProperty('brand'));
console.log(car.hasOwnProperty('year'));

// using the 'in' operator
console.log('model'in car);
console.log('year'in car);
