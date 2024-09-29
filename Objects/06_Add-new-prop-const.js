// Add a new property to an existing object and modify an existing property.
//  What happens if the object is declared with const?

const book = {
    title: "JavaScript Essentials",
    author: "John Doe"
};

// Adding a new property
book.publishedYear = 2024;

// Modifying an existing property
book.title = "Advanced JavaScript";

console.log(book);

// Explanation: Even though `book` is declared
//  with `const`, its properties can be changed.