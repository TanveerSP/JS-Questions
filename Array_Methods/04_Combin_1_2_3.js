// 1 create an are of cities
// push one citie in cities ("Berlin")
// add element in firt index of an array ("Sydney")
// removi citien in an array ("New York")
// console last two cities
//console all cities

let cities = ["New York","Delhi","Mumbai","Tokyo",]
cities.push("Berlin");
cities.unshift("Sydney");

console.log(cities);

cities.splice(1,1); //This is the deleteCount. It tells how many elements 
// should be removed from the cities array starting from the startIndex.
//  Here, 1 means one element will be removed.

let lastTwoCities = cities.slice(-2)
console.log(cities);
console.log(lastTwoCities);

