let myName = "tanveer    ";
let myPassion = "webdev   ";

// console.log(myName.truelength());

let myHero = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
// how to inject function i preford like 'tanveer()'
// Ans :-
Object.prototype.tanveer = function () {
  console.log(`tanveer is present in all Objects`);
};

Array.prototype.heyTanveer = function () {
  console.log("tanveer say he");
};

// heroPower.tanveer()
// myHero.tanveer();
// myHero.heyTanveer();

// heroPower.heyTanveer() // <- this give error becose this heyTanveer not for Object

// =========== This is Old way =========== // 
const User = {
    name: 'veer',
    email: 'tanveer@google.com'
}
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvaliable: false,
};
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// =========== Modern way ============
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "chaiAurCode    "
String.prototype.trueLength = function() {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUserName.trueLength()

"tanveer".trueLength()
"iceTea".trueLength()