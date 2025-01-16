function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 500, 400))

const user = {
  username: "tanveer",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
// handleObject(user)
handleObject({
  username: "sam{",
  price: 399,
});

const myNewArra = [200, 300, 400];

function retrunSecondValue(getArray) {
  return getArray[1];
}
// console.log(retrunSecondValue(myNewArra));
console.log(retrunSecondValue([400, 500, 600]));
