const parent = document.querySelector(".parent");
//   console.log(parent);
//   console.log(parent.children);
//   console.log(parent.children[1].innerHTML);
  for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
  }
  parent.children[1].style.color = "yellow"
//   console.log(parent.lastElementChild.innerHTML);

let dayOne = document.querySelector('.day');
console.log(dayOne.innerHTML);
console.log(dayOne.parentElement); // access parent element using childern
console.log(dayOne.nextSibling); // access sibling using sibling

console.log("NODES: ", parent.childNodes);