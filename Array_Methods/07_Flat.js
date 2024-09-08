// 1 Given the array [1, [2, 3], [4, [5, 6]]] --- Done
let numArr = [1, [2, 3], [4, [5, 6]]];
const real_Num1 = numArr.flat(1);
console.log(real_Num1);

/* 2  Use the flat() method to flatten the array
 ['a', ['b', 'c'], [['d']], [[['e']]]] so that 
all elements are at the same depth. */
// Output => ['a', ['b', 'c'], [['d']], [[['e']]]]
let alphabet = ['a', ['b', 'c'], [['d']], [[['e']]]]
const flatAlph = alphabet.flat(1);
console.log(flatAlph);

/* 3 Take the array [[1, 2], [3, 4], [5, 6]] and use the flat()
 method to combine all the elements into a single array at depth 1. */
// Output => [1, 2, 3, 4, 5, 6]
const numbers = [[1, 2], [3, 4], [5, 6]];
const real_Num2 = numbers.flat(2);
console.log(real_Num2)

/* 
Question 4: Flatten the array [10, [20, [30, [40]]]] 
to a depth of 2 using flat().
*/
// Output => [10, 20, 30, [40]]
let useDepthTwoArr = [10, [20, [30, [40]]]];
let ansOfArr = useDepthTwoArr.flat(2);
console.log(ansOfArr);

/* 
Question 5: Use the flat() method to flatten the array 
[[[1]], [[2]], [[3]]] into a single level array.
*/
// Output => [1, 2, 3]
let singleArr = [[[1]], [[2]], [[3]]];
let singleLevel = singleArr.flat(3);
console.log(singleLevel)