// Problem 1: Method this Context
const cars = {
    brand: 'Tesla',
    carname: 'H3IIX',
    getBrand: function () {
        return this.brand;
    }
}

console.log(cars.getBrand());

// Problem 2: Arrow Function this Context
const indeanCars = {
    brand: "Tata",
    carname: "Hariar",
    getBrand: () => {
        return this.brand;
    }
}
console.log(indeanCars.getBrand()); //What will be the output of bike.getBrand()? Why?
// Explanation: Arrow functions don’t have their own this. In this case, this is lexically bound to the surrounding context,
//  which is the global object (window in browsers). Since window.brand doesn’t exist, it returns undefined.

// Problem 3: Using this Inside a Regular Function
function showName() {
    console.log(this.name)
}

const person = {
    name: "Tanveer",
    display: showName
};

person.display();

// Problem 4: this in Global Function
function msg() {
    console.log(this.globalMsg)
}

const globalMsg = "Hello Duniya";
msg();

// Problem 5: Returning Objects in Arrow Functions

const getUser = (name, age) => {
    return {
        name: name,
        age: age
    };
};

console.log(getUser("Tanveer", 25));


const bike = (name, brand) => {
    return {
        name: name,
        brand: brand,
    };
}
console.log(bike("Passion", "Hero"))