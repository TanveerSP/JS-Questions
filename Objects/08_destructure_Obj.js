// How would you destructure the coursename from the course 
// object and store it in a variable called name?

const course = {
    coursename: "TS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
};

const {coursename: name} = course;
console.log(name); // Output: "TS in Hindi"

