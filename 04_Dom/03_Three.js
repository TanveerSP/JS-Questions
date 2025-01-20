const div = document.createElement("div");
console.log(div);
div.className = "main";
// div.di = round(Math.random() * 10 + 1);
div.setAttribute("title", "gernerted title");
div.style.backgroundColor = "darkgreen";
div.style.padding = "12px";
div.style.color = "white";
// div.innerText = "Learn about hot to create new element";
const addText = document.createTextNode("Learn about hot to create new element");
div.appendChild(addText);

document.body.appendChild(div)