const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");

btn.forEach(function (button) {
  //   console.log(btn);
  button.addEventListener("click", function (even) {
    console.log(even);
    console.log(even.target);

    if (even.target.id === "grey") {
      body.style.backgroundColor = even.target.id;
    }
    if (even.target.id === "white") {
      body.style.backgroundColor = even.target.id;
    }
    if (even.target.id === "blue") {
      body.style.backgroundColor = even.target.id;
    }
    if (even.target.id === "yellow") {
      body.style.backgroundColor = even.target.id;
    }
    if (even.target.id === "green") {
      body.style.backgroundColor = even.target.id;
    }
    if (even.target.id === "orange") {
      body.style.backgroundColor = even.target.id;
    }
  });
});
