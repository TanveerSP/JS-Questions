// How do you create a new date object representing the current date and time

const currentDate = new Date();
console.log(currentDate);

// Which methods of the Date object would you use to retrieve:

// 1. The current year?
const currentYear = new Date();
console.log(`Current Year - ${currentDate.getFullYear()}`);

// 2. The current month (zero-based)?
const currentMonth = new Date();
console.log(`Current Month - ${currentMonth.getMonth()}` );

// 3. The current day of the week?
const currentDay = new Date();
console.log(`Current Day - ${currentDay.getDate()}`);
