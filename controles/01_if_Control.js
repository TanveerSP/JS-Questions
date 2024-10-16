// 1. Question: Find if a number is even or odd using if-else

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return `${num} is Even`;
    }
    else {
        return `${num} is Odd`;
    }
}

// console.log(checkEvenOdd(5));
// console.log(checkEvenOdd(10));

// 2. Check if a number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        console.log(`Positive`);
    } else if (num < 0) {
        console.log(`Negative`);
    } else {
        console.log(`Zero`);
    }
}

// checkNumber(0);

// 3. Find the largest of three numbers
function findLargestNum(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(`${num1} num1 is the Largest Num`);
    } else if (num2 > num3 && num2 > num1) {
        console.log(`${num2} num2 is the Largest Num`);
    } else {
        console.log(`${num3} num3 is the Largest Num`);
    }
}

// findLargestNum(5,2,31)

// 4. Check if a person is eligible to vote
function checkVotingEligibility(age) {
    if (age >= 18) {
        console.log(`${age} Eligible to vote`);
    } else {
        console.log(`${age} Not Eligible`);
    }
}
// checkVotingEligibility(17);
// checkVotingEligibility(24);

// 5. Check if a year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}

// isLeapYear(2023);
// isLeapYear(2024);

// 6. Check if a number is divisible by 5 and 10
function isDivisibleByFiveAndTen(num) {
    if (num % 5 === 0 && num % 10 === 0) {
        console.log(`${num} is divisible by both 5 and 10`);
    } else {
        console.log(`${num} is not divisible by both 5 and 10`);
    }
}

// isDivisibleByFiveAndTen(50);
// isDivisibleByFiveAndTen(25);


