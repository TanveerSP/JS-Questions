const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currval) {
    return acc + currval
}, 0)

console.log(myTotal);