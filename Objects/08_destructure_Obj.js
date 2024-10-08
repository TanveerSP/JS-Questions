// Q1 How would you destructure the coursename from the course 
// object and store it in a variable called name?

const course = {
    coursename: "TS in Hindi",
    price: "999",
    courseInstructor: "Hitesh",
    details: {
        level: "Beginner",
        rating: 4.8
    },
    start:{
        time: "9pm to 11pm",
        day: "Sun, Thus, Sat",
    }
};

const { coursename: name } = course;
console.log(name); // Output: "TS in Hindi"

// Q2 If you want to destructure both coursename and price from the course object, how would you do that?

const { coursename, price } = course;
console.log(coursename);
console.log(price);


// Q3 What happens if a property does not exist in the object when you try to destructure it? Try destructuring duration from the course object.
// Q4 How can you provide a default value while destructuring, in case the property does not exist? Provide a default value for duration.
const { duration = "1 hourse" } = course;
console.log(duration)


// Q5 How can you destructure nested objects? Consider a new course object with a nested details object and destructure level.
const {details: {level}} = course;
console.log(level);

const {start: {time, day}} = course
console.log(time);
console.log(day);


// final Object 
console.log(course);

