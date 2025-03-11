async function getAllUsersIn() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    // console.log(data);
    const username = data.map((user) => user.username);
    //   console.log(username);

    const userEmail = data.map((user) => user.email);
    console.log(userEmail);

    const userNumber = data.map((user) => user.number)
    console.log(userNumber);

  } catch (error) {
    console.log("Error is ", error);
  }
}

getAllUsersIn();
