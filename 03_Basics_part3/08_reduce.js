const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc :${acc} and currval ${currval}`);
//   return acc + currval;
// }, 0);

const myTotal = myNums.reduce((accu, currentValu) => accu + currentValu, 0);

console.log(myTotal);

const shoppinCart = [
  {
    itemName: "js coutse",
    price: 2999,
  },
  {
    itemName: "python coutse",
    price: 999,
  },
  {
    itemName: "app coutse",
    price: 5999,
  },
  {
    itemName: "data science coutse",
    price: 12999,
  },
];

const priceToPay = shoppinCart.reduce((accu, item) => accu + item.price, 0);
console.log(priceToPay)