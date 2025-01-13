// Q! How do you create a new date object representing the current date and time

const currentDate = new Date();
console.log(currentDate);

// Q2 Which methods of the Date object would you use to retrieve:
// 1. The current year?
const currentYear = new Date();
console.log(`Current Year - ${currentDate.getFullYear()}`);
// 2. The current month (zero-based)?
const currentMonth = new Date();
console.log(`Current Month - ${currentMonth.getMonth()}`);
// 3. The current day of the week?
const currentDay = new Date();
console.log(`Current Day - ${currentDay.getDate()}`);

// Q3 How can you convert a Date object into a
//  human-readable string? Explain the difference
// between .toLocaleDateString(),
// .toLocaleTimeString(), and .toISOString().
const current_Date = new Date();
console.log(
  `Current Date Using toLocalDateString => ${current_Date.toLocaleDateString()}`
);
console.log(
  `Current Date Using toLocalTimeString => ${current_Date.toLocaleTimeString()}`
);
console.log(`Current Date Using toISOString => ${current_Date.toISOString()}`);

// Q4 How would you add or subtract days to/from a given
// Date object? Provide a code example.
const date = new Date();
// console.log(`Original Date => ${date}`);

date.setDate(date.getDate() + 5); // Add 5 Days
console.log(`After Adding 5 Days ${date}`);

date.setDate(date.setDate() - 3); // subtract 3 Days
console.log(`After Subtract 3 Days ${date}`);

// Q5 How can you compare two Date objects to determine
// which one is earlier or later? Why is it better to
//  use .getTime() for comparisons instead of directly
// comparing the Date objects?

const date1 = new Date("12-01-2025");
const date2 = new Date("12-01-2026");

if(date1.getTime() < date2.getTime()){
    console.log("Date1 is the Earlier Date")
} else if(date2.getTime() > date1.getTime()){
    console.log("Date2 is the Earlier Date")
} else {
    console.log("Both dates are equal");
}
