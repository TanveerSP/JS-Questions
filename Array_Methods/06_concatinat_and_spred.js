const group1 = ["Nike", "Adidas", "Puma"];
const group2 = ["Spark", "WallLine", "Paregon"];

const combainGrp = group1.concat(group2)
console.log("Combain Two Array in One Array => ",combainGrp);

const fruts = ["Apple","Mango","Oreange"];
const numbers = [1,2,3];
const cars = ["BMW","Mercedic","Ferari"]

// fruts.push(numbers);
// console.log("After Push number Arr in fruts Arr => ",fruts);

let mixArr = fruts.concat(numbers,cars);
console.log("After mix two array using concat => ",mixArr);

let allArr = [...fruts, ...cars, ...numbers];
console.log("After use spred oprator", allArr);

const vagitable = ["Tomato","Onian","Potato"];
const frutes = ["Apple","Banana","Greps"];
const fourWhils = ["Mahindra","Tata","Toyota"];

const combainArr = [...vagitable,...frutes,...fourWhils];
console.log(" => ",combainArr);

combainArr.map((ele,ind) => (
    console.log(ele, ind)
))