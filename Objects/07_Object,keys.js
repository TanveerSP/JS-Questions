// Question: Write a function that accepts an object and returns 
// an array of its keys. Use Object.keys() to achieve this.

function getObjectKeys(obj) {
    return Object.keys(obj)
}

const product = {
    id: 101,
    name: "Laptop",
    price: 1200
};

console.log(getObjectKeys(product));

