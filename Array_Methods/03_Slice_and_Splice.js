// =================== Slice ======================
// No Modification: slice() original array ko modify nahi karta. 
// Yeh ek naya array return karta hai, 
// jo selected portion ko contain karta hai.
// Kaam: Isse tum array ka ek part ya sub-array nikaal sakte ho
//  bina original array ko badle.
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let slicedArray = num.slice(2, 7);
console.log('Sliced Array =>', slicedArray);


// =================== Splice ======================
// Modification: splice() array ko directly modify karta hai.
//  Yeh asli array ko change karta hai.
// Kaam: Isse tum array ke specific index par se elements 
// remove ya add kar sakte ho.
let animal = ["Tiger", "Loin", "Puma", "Panther", "Cat"]
animal.splice(2, 1, "Deer", "Elephent")
// splice jo hai vo 2 se lekar 4 index of array print certa hai
// eg "Puma" ka index 2 hai or "cat" ka index 4 hai 
console.log(animal);