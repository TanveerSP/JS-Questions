// for

// for (let ind = 0; ind <= 10; ind++) {
//   const value = ind;
//   console.log(value);
// }

// for (let value = 0; value <= 10; value++) {
//     const element = value;
//     if(element == 5) {
//         console.log("5 is Best number");
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer loop val: ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner loop val ${j} inner loop ${i}`)
//     console.log(i + "*" + j + " = " + i * j);
//   }
// }

// const myArray = ["Ironman", "Superman", "Batman", "Thor"];

// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

// const numArr = [2, 3, -5, 6];
// for (let i = 0; i < numArr.length; i++) {
//   const element = numArr[i];
//   if (element < 0) {
//     console.log(`this ${element} is small than 0`);
//   }
// }

for (let i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log(`Detected ${i}`);
    // break; // if 5 is detected then loop was stop
    continue; // if 5 is detected then also loop was run
  }
  console.log(`value of i is ${i}`);
}
