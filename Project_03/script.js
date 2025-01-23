// const clock = document.getElementById("clock");
// // const clock = document.querySelector('#clock')

// //
// setInterval(function () {
//   let date = new Date();
//   //   console.log(date.toLocaleString());
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);


// const clock = document.getElementById("clock");

// setInterval(function () {
//   let date = new Date()
//   // console.log(date.toLocaleDateString());
//   clock.innerHTML = date.toLocaleTimeString();
// },1000)

const timeClock = document.querySelector('#clock');

setInterval( () => {
  let date = new Date()
  // timeClock.innerHTML = date.toLocaleDateString();
  // timeClock.innerHTML = date.toLocaleTimeString();
  timeClock.innerHTML = date.toLocaleString();
},1000)