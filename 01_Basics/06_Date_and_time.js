//  Dates

let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // Date is a object

// let myCreatedDate = new Date(2025, 0, 23);
// console.log(myCreatedDate.toDateString())

function myCreatedDate(year, month, day) {
  //   let myDate = new Date(year, month - 1, day).toDateString();
  //   let myDate = new Date(year, month - 1, day).toLocaleDateString();
  let myDate = new Date(year, month - 1, day).toLocaleString();
  return myDate;
}

// console.log(myCreatedDate(2030, 8, 23));

function TimeStamp() {
  let myTimeStamp = Date.now();
  return console.log(Math.floor(Date.now() / 1000));
}

// TimeStamp()

function date() {
  let newDate = new Date();
  console.log(newDate.getMonth() + 1);
  console.log(newDate.getDay());

//  IMP 
  console.log(
    newDate.toLocaleString("default", {
      weekday: "long",
      day: 'numeric',
      year: 'numeric'
    })
  );
  return;
}
date();
