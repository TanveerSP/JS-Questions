const promise = new Promise((res, rej) => {
  // Asynchronous kaam yaha likho
  let num = 5;

  if (num > 3) {
    res("promese fulfilled");
  } else {
    rej("promese rejected");
  }
});

// promise ko handle karna
promise
  .then((successMessage) => {
    console.log("suceess: ", successMessage);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

// ===================================
// Real - word Example API Call
// ===================================

// Fake async function jo 2 second ke baad response dega
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000);
  });
}

// call karte hain
// fetchData()
//   .then((data) => {
//     console.log("Response: ", data);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

//  =========================
//  New approach handel async await
//  =========================

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response) {
      // Agar error status ho toh throw karega
      throw new Error(`Http error! ${response.status}`);
    }

    // Response ko JSON me convert karte hain
    const user = await response.json();

    // data ko console pe print karte hai
    console.log("user data: ", user);
  } catch (err) {
    console.log("Error fetching data: ", err);
  }
}
getData();
