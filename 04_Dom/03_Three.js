// const div = document.createElement("div");
// console.log(div);
// div.className = "main";
// // div.di = round(Math.random() * 10 + 1);
// div.setAttribute("title", "gernerted title");
// div.style.backgroundColor = "darkgreen";
// div.style.padding = "12px";
// div.style.color = "white";

// // div.innerText = "Learn about hot to create new element";
// const addText = document.createTextNode("Learn about hot to create new element");

// div.appendChild(addText);

// document.body.appendChild(div)

// How to create element in HTML using JS
const div = document.createElement("div");
console.log(div);

// How to give class name to div in js
div.className = "main";
console.log("div class :-", div.outerHTML);

// How to give ID for div
div.id = "parent";
console.log("div Id:-", div.outerHTML);

// How to give random name to div in js
// div.id.round(Math.random() * 10 + 1);

// How to give set attribute in js
div.setAttribute("title", "genreted title");
console.log("div title :-", div.outerHTML);

// How to style created elem 'div'
div.style.backgroundColor = "green";
div.style.color = "white";
div.style.padding = "18px";

// How to add text or content inside of div
const addText = document.createTextNode("Hey, I'am tanveer");

// How to show content on browser
div.appendChild(addText);
document.body.appendChild(div);

// Create h1 element
const h1 = document.createElement("h1");
console.log(h1);

h1.style.color = "White";
h1.style.backgroundColor = "darkgreen";
h1.style.padding = "18px";

const h1Text = document.createTextNode("Hi I am Full/MERN Stack Developer");
h1.appendChild(h1Text);

document.body.append(h1);

const p1 = document.createElement("p1");

let p1Text = document.createTextNode(
  "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quidem."
);
p1.style.backgroundColor = "green"
p1.style.padding = "20px";
p1.style.color = "white"
p1.appendChild(p1Text);
document.body.appendChild(p1);

const h2 = document.createElement('h2');
let h2Text = document.createTextNode("Passion, Hard Work, Dadecation, Strong Mindset, Big Gols")
h2.appendChild(h2Text)
document.body.appendChild(h2);
h2.style.backgroundColor = "white"
h2.style.padding = "20px"
h2.style.color = "darkgreen"
h2.style.margin = "20px"

let div2 = document.createElement('div');

let div2Content = document.createTextNode('click me')

div2.appendChild(div2Content);

// console.log(div2);

div2.style.padding = '25px';
div2.style.backgroundColor = 'red';
div2.style.margin = '30px'

div2.className = 'button'
console.log(div2.outerHTML);

// show on html, brwoser
document.body.appendChild(div2)


const h3 = document.createElement('h3');

const h3Text = document.createTextNode('Create h2 tag using js');

h3.appendChild(h3Text);

console.log();
document.body.appendChild(h3)

h3.style.color = "white"
