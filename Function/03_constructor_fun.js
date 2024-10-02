// Write a simpal constructor function -> Pascal Notaion -> first letter 
// of every word is Capital -> NumberOfStr
function RectAngle(len,bre) { 
    // this.length = 1,
    // this.breath = 2;
    this.length = len; // this keyword reffer current object
    this.breath = bre;
    this.draw = function() {
        console.log('drawing');
    }
}

const result = new RectAngle(3,9); // new keyword give a empty object 
result.color = 'green';
console.log(result)
// delete result.color;
// console.log(result)

