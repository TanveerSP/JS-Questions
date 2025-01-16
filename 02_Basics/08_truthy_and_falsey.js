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
