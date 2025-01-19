function language(myObject) {
  for (const key in myObject) {
    console.log(`${key}  shortcut is for :- ${myObject[key]}`);
  }
}
const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "switf by apple",
};
// language(myObject);

function programLan(prog) {
  for (const key in prog) {
    console.log(`${key} ${prog[key]}`)
  }
}
const prog = ["js", "rb", "py", "java", "cpp"];
// programLan(prog);

// this map is not itretable
function getMapVal(map) {
  for (const key in map) {
    console.log()
  }
}
const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");
// getMapVal(map)
