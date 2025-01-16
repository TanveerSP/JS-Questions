// Q1.Write a while loop to print numbers from 1 to 5.
function prinNumbers(num, input) {
  while (num <= input) {
    console.log(num);
    num == num++;
  }
}
// prinNumbers(1, 10);

// Q2. Use a do-while loop to print numbers from 1 to 5.
function printNumbersUsingDo_While(num, input) {
  do {
    console.log(num);

    num++; // use only num ++ Don't use num = num
    // if we use num = num ++ or num = num +1 then loop run infinity
  } while (num <= input);
}
// printNumbersUsingDo_While(0, 5);

// Q3. Write a program to calculate the sum
//  of numbers from 1 to 10 using a while loop.
function sumOf1To10(one, input, sum) {
  while (one <= input) {
    console.log(`Sum of :${(sum += one)}`);

    one++;
  }
}
// sumOf1To10(1, 10, 0);

//  Q4. Write a while loop that stops if the user
// enters a specific keyword (e.g., "stop").
function keywordStop(str) {
  while (input !== str) {
    input = prompt(`Enter a keyword type '${str}' to end`);
  }
}
// keywordStop("stop");
// Note :- this code run only one browser

// Q5. Use a do-while loop to print all even
//  numbers between 1 and 10.
function evenNum(start, end) {
  do {
    if (start % 2 === 0) {
      console.log(`this ${start} number is Even`);
    } else {
      console.log(`this ${start} number is Odd`);
    }
    start++;
  } while (start <= end);
}

evenNum(1, 2);
