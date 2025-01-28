// Q1 What is Object-Oriented Programming (OOP)?
// Ans =>
// OOP is a programming paradigm based on the concept
// of "objects," which can contain data (properties) and
// code (methods). OOP principles include Encapsulation,
//  Inheritance, Polymorphism, and Abstraction.

// Q2  What is the difference between a class and an object?
// Ans =>
// Class: A blueprint or template used to create objects.
// Object: An instance of a class that holds actual values
// and behaves according to the class definition.

class car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}
const myCar = new car("Toyota", "Corolla");
console.log(myCar);

