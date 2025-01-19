// Q1. Merge two objects using the spread operator and Object.assign().
// Q2. Which one is more efficient?
// Q2 Ans -> in spread operator and Object.assing(), spread operater is efficient and good for code fast 

const list1 = {
    1: "Tanveer",
    2: "Faizan",
}
const list2 = {
    3: "Umer",
    4: "Arman"
}
// spred operateor
const usingSpred = {...list1, ...list2};
console.log("Using Spread Operator =>",usingSpred);


// Object.assing()
const usingAssing = Object.assign({}, list1,list2);
console.log("Using Object.assing() => ",usingAssing)