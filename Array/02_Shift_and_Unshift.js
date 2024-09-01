let color = ["Red", "Yellow", "Blue"];

color.unshift("Green")
// unshift function push value in array of first index
console.log(color);

color.shift();
// shift function remove first index element in an array
console.log(color);

let product = ["Tata", "Cat", "Phone", "Apple"];
product.shift();
console.log(product);

product.unshift("Mahindra")
console.log(product);

// =================================================================== //

let array = [
    "Apple", "BMW", "Cat", "Dance", "Electron", "Fan", "Global"
];
console.log("Array =>",array);

array.unshift("Tanveer");
console.log(" Using unshift =>", array)

array.shift();
console.log(" Using shift =>", array);

