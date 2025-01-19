function progLang(coding) {
  // this forEach loop using normal function
  coding.forEach(function (item) {
    console.log(item);
  });
}

function usingArroFun(coding) {
  // this forEach loop using arrow function
  coding.forEach((item) => {
    console.log(item);
  });
}

function printMe(item) {
  console.log(item);
}

const coding = ["js", "ruby", "java", "python", "cpp"];
// progLang(coding)
// usingArroFun(coding);
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "javascript",
    languageFile: "js",
  },
  {
    languageName: "python",
    languageFile: "py",
  },
  {
    languageName: "java",
    languageFile: "java",
  },
];

myCoding.forEach((item) => {
    console.log(item.languageName);
})