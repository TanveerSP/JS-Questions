// Q1 How would you destructure the coursename from the course 
// object and store it in a variable called name?

const course = {
    coursename: "TS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
};

const {coursename: name} = course;
console.log(name); // Output: "TS in Hindi"

// Q2 If you want to destructure both coursename and price from the course object, how would you do that?

const {coursename, price} = course;
console.log(coursename);
console.log(price);


// Q3 What happens if a property does not exist in the object when you try to destructure it? Try destructuring duration from the course object.
const { duration = '2 hours'} = course
console.log(duration);