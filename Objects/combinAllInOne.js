/* Let's combine everything you've learned into a small project where we define an object for a course, destructure its properties,
 add new properties, and use some methods like Object.keys() and Object.values() to manipulate and display the data. */

// Define a course Object
const course = {
    coursename: "Ts in Hindi",
    price: "990",
    courseInstructor: "Hitesh",
}

// Log course Details
console.log("Course Instructor :", course.courseInstructor);
console.log("Course Price")

// Destructure the course object
const { price, courseInstructor: Instructor } = course;
console.log("Course Price :", price);
console.log("Course Instructor :", Instructor);

// Add new properties to the course object
course.duration = "1 Houers";
course.isLive = true;

// Log the updated course object
console.log("Updated Course Object: ", course);

// Check if a property exists in the course object
console.log("Has property 'isLive': ", course.hasOwnProperty('isLive'));
console.log("Has property 'rating': ", course.hasOwnProperty('rating'));

// Use Object.keys() and Object.values() to list all keys and values
console.log("Course Key ->", Object.keys(course));
console.log("Course Value ->", Object.values(course));

// Use Object.entries() to log both keys and values together
console.log("Entire Course ->", Object.entries(course));

// Find an instructor using a list of courses
const courses = [
    {
        coursename: "JS in Hindi",
        courseInstructor: "Hitesh",
        price: 999
    },
    {
        coursename: "React in Hindi",
        courseInstructor: "Tanveer",
        price: 1499
    }
];

const findInstructor = "Tanveer";
const foundInstructor = courses.find(course => course.courseInstructor === findInstructor);
console.log("Instructor course is found",foundInstructor);