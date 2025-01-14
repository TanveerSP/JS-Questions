// ************ indexOf ************** //
let books = ["The Hobbit", "1984", "Moby Dick", "The Great Gatsby"];
let index = books.indexOf("1984");
if (index !== -1) {
    books.splice(index, 1);
}
console.log(books);

let citys = ["Ahmadnagar","Aurangabad","Pune","1974","Mumbai"]
let ind = citys.indexOf("1974");
if(ind !== -1){
    citys.splice(index, 1);
}
console.log(citys);

//  ************ include **************
let vegetable = ["Carrot","Broccoli","Spinach", "Peas"];
console.log(vegetable.includes("Peas"))
console.log(vegetable.indexOf("Peas"));

