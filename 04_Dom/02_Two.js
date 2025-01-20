// const parent = document.querySelector(".parent");
// //   console.log(parent);
// //   console.log(parent.children);
// //   console.log(parent.children[1].innerHTML);
//   for (let i = 0; i < parent.children.length; i++) {
//     console.log(parent.children[i].innerHTML);
//   }
//   parent.children[1].style.color = "yellow"
// //   console.log(parent.lastElementChild.innerHTML);

// let dayOne = document.querySelector('.day');
// console.log(dayOne.innerHTML);
// console.log(dayOne.parentElement); // access parent element using childern
// console.log(dayOne.nextSibling); // access sibling using sibling

// console.log("NODES: ", parent.childNodes);

// ============================================================== //
// ============================================================== //

// How to access parent using querySelector()
const parent = document.querySelector(".parent");
console.log(parent);

// How to access all childerns
console.log(parent.children);

// How to access spacefic childern
console.log(parent.children[1].innerText);

// How to start loop on parent
for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerText);
}

// How to give css propert using parent to child
parent.children[0].style.backgroundColor = "olive";
parent.children[1].style.backgroundColor = "darkgreen";
parent.children[2].style.backgroundColor = "red";
parent.children[3].style.backgroundColor = "darkred";
parent.children[4].style.backgroundColor = "darkgray";

// How to access last element in parent
/* console.log(parent.lastElementChild.innerText); */

// How to select one child
const oneDay = document.querySelector(".day");
// console.log(oneDay.innerText);
oneDay.style.padding = "18px";

// How to select all day
const allDay = document.querySelectorAll(".day");

// How to access parent using Child
console.log(oneDay.parentElement);

// How to access next-sibling using sibling
console.log(oneDay.nextSibling);

// How to get NODE of child's using parent
console.log("NODE :", parent.childNodes);
