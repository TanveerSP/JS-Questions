// const userEmail = "tanveer@.ai";
const userEmail = [];

if (userEmail) {
  console.log("Got user Email");
} else {
  console.log("Don't have uesr Email");
}

// falsy Value =>
// 1. false, // 2. 0, // 3. -0, // 4. BigInt 0n,
// 5. "", // 6. null, // 7. undefind, // 8. NuN.

// truthy Value =>
// 1. (), 2. {}, 3. [], 4.ture, "0", "false", " ",
//  fucnciton() {}

// check array is empty
// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// check object is empty
const empObj = {};
if (Object.keys(empObj).length === 0) {
  console.log("Objec is Empty");
}

// Nullish coalescing Operator (??) : null undefind
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10; // sefty check karta hai agar val me emp ho aur hum '??' ye oprator use ker ne ke bad jo value dal dete hai val1 me vo value jaige
// val1 = undefined ?? 15;
val1 = null ?? undefined ?? 10 ?? 20;

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPri = 100;
iceTeaPri <= 80 ? console.log("less than 80") : console.log("more than 80");
