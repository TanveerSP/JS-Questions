function prinNum(ind, input) {
  while (ind <= input) {
    console.log(`Value of index is ${ind}`);
    ind = ind + 2;
  }
}
// prinNum(0, 10);

function myHeros(index, myArr) {
  while (index < myArr.length) {
    // console.log(`Value is ${myArr[index].toUpperCase()}`);
    console.log(`Value is ${myArr[index]}`);
    index = index + 1;
  }
}
let myArr = ["Ironman", "Batman", "Thor", "Superman"];
let index = 0;
// myHeros(index, myArr);

// +++++++++++++++++++ Do-while Loop => +++++++++++++++++++++
function printNum1(score) {
  do {
    console.log(`Score is ${score}`);
    score++;
  } while (score <= 10);
}
printNum1(11);
