// write a simpale factory function
function createReactangle(length, breadth) {
    return rectangle = {
        // length: length,
        // breadth: breadth, 
        length,
        breadth,

        // draw: function() {
        //     console.log("Drawing reactangle");
        // }

        draw() {
            console.log("Drawing reactangle");
        }
    };
}
// call function
const reactangleObj1 = createReactangle(44, 100);
const reactangle2 = createReactangle(5, 12);
const reactangle3 = createReactangle(9, 20);
console.log(reactangleObj1);
console.log(reactangle2);
console.log(reactangle3);
// console.log(reactangleObj1.length);
// console.log(reactangleObj1.breadth);
// console.log(reactangleObj1.draw);