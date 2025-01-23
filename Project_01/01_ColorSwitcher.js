// const btn = document.querySelectorAll(".button");
// const body = document.querySelector("body");

// btn.forEach(function (button) {
//   //   console.log(btn);
//   button.addEventListener("click", function (even) {
//     console.log(even);
//     console.log(even.target);

//     if (even.target.id === "grey") {
//       body.style.backgroundColor = even.target.id;
//     }
//     if (even.target.id === "white") {
//       body.style.backgroundColor = even.target.id;
//     }
//     if (even.target.id === "blue") {
//       body.style.backgroundColor = even.target.id;
//     }
//     if (even.target.id === "yellow") {
//       body.style.backgroundColor = even.target.id;
//     }
//     if (even.target.id === "green") {
//       body.style.backgroundColor = even.target.id;
//     }
//     if (even.target.id === "orange") {
//       body.style.backgroundColor = even.target.id;
//     }
//   });
// });

// const btn = document.querySelectorAll(".button");
// const canves = document.querySelector("body");

// btn.forEach(function (button) {
//   console.log(button);
//   console.log(button.target);

//   button.addEventListener("click", function (e) {
//     if(e.target.id === "grey"){
//       canves.style.backgroundColor = e.target.id
//     }
//     if(e.target.id === "white"){
//       canves.style.backgroundColor = e.target.id
//     }
//     if(e.target.id === "blue"){
//       canves.style.backgroundColor = e.target.id
//     }
//     if(e.target.id === "yellow"){
//       canves.style.backgroundColor = e.target.id
//     }
//     if(e.target.id === "green"){
//       canves.style.backgroundColor = e.target.id
//     }
//     if(e.target.id === "orange"){
//       canves.style.backgroundColor = e.target.id
//     }
//     if(e.target.id === "red"){
//       canves.style.backgroundColor = e.target.id
//     }
//     if(e.target.id === "pink"){
//       canves.style.backgroundColor = e.target.id
//     }
//   });
// });

const button = document.querySelectorAll(".button");
const canves = document.querySelector("body");

button.forEach(function (btn) {
  const selectColor = document.querySelector("h3");
  console.log(btn);
  console.log(btn.target);

  btn.addEventListener("click", function (e) {
    console.log(e);
    if (e.target.id === "grey") {
      canves.style.backgroundColor = e.target.id;
      selectColor.innerHTML = `<span> You Selected Color is :- "${e.target.id}"</span>`;
    }
    if (e.target.id === "white") {
      canves.style.backgroundColor = e.target.id;
      selectColor.innerHTML = `<span> You Selected Color is :- "${e.target.id}"</span>`;
    }
    if (e.target.id === "blue") {
      canves.style.backgroundColor = e.target.id;
      selectColor.innerHTML = `<span> You Selected Color is :- "${e.target.id}"</span>`;
    }
    if (e.target.id === "yellow") {
      canves.style.backgroundColor = e.target.id;
      selectColor.innerHTML = `<span> You Selected Color is :- "${e.target.id}"</span>`;
    }
    if (e.target.id === "green") {
      canves.style.backgroundColor = e.target.id;
      selectColor.innerHTML = `<span> You Selected Color is :- "${e.target.id}"</span>`;
    }
    if (e.target.id === "orange") {
      canves.style.backgroundColor = e.target.id;
      selectColor.innerHTML = `<span> You Selected Color is :- "${e.target.id}"</span>`;
    }
    if (e.target.id === "red") {
      canves.style.backgroundColor = e.target.id;
      selectColor.innerHTML = `<span> You Selected Color is :- "${e.target.id}"</span>`;
    }
    if (e.target.id === "pink") {
      canves.style.backgroundColor = e.target.id;
      selectColor.innerHtml = `<span> You Selected Color is :- "${e.target.id}"</span>`;
    }
  });
});
