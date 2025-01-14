const marvel_heros = ["Ironman", "Thor", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1])

// concat is a function it is join array to array
const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros)

let sport_car = ["Fararee", "Maclaren", "Bugatti", "BMW"];
let sport_bike = ["Ninja", "MT-50", "GT-650", "Ducati"];

// let myToys = sport_bike.concat(sport_car);
// console.log("My all toys => ", myToys);
// console.log("my cars ", sport_car);
// console.log("my bikes ", sport_bike);

// '...' <- this is spred oprator this is also join multipal arrays
const all_new_heros = [
  ...marvel_heros,
  ...dc_heros,
  ...sport_car,
  ...sport_bike,
];
// console.log(all_new_heros);

const another_array = [1, 2, 3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array)


console.log(Array.isArray("tanveer"))
console.log(Array.from("tanveer"))
console.log(Array.from({naem: "tanveer"}))

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));