// generate a random color
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());

let bgColor = document.querySelector("body");

let chageColor = function () {
  bgColor.style.backgroundColor = randomColor();
};

setInterval(chageColor, 2000);
