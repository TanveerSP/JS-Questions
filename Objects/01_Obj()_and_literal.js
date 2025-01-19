// Create an Object using new Object()
const user1 = new Object();
user1.id = 1;
user1.name = "Adam";

console.log("Using new Object() :",user1);

// Create an Object using literal syntax
const user2 = {
    id: 101,
    name: "Nuha"
}
console.log("Using literal :",user2)

//  =================================================================== //

const bikes = new Object();
bikes.company = "bajaj";
bikes.name = "appache";
console.log(bikes);                         

const cars = new Object();
cars.id = 101;
cars.number = "MH 16 AZ 4617";
cars.name = "Thar";

console.log(cars)
console.log(cars.name); 

const AutoMotive = {
    id: 1,
    name: "Toyota",
    id: 2,
    name: "Mahendra"
}
console.log(AutoMotive.name)