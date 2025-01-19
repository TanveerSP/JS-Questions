// // i try to change name after click on h1 tag 

// // step1: select the h1 element by id 
// const nameElemnt = document.getElementById('title');

// // step2: Add an event listener to the h1 ele
// nameElemnt.addEventListener('click', () => {
//     // step3: Change the text content when clicked
//     nameElemnt.textContent = " Learn with Tanveer"
// })

const liHold = document.querySelectorAll('li')
liHold.forEach( (list) => list.style.color = "olive");

const firstHading = document.getElementById('title');
firstHading.style.color = "red";
firstHading.style.marginLeft = "40px";
firstHading.style.padding = "40px";

const myName = document.getElementsByClassName('.sayname');
myName.style.color = "yellow"

const mypasion = document.getElementById('passion')
mypasion.style.color = "Green";