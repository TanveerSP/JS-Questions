const promise = new Promise((res, rej) => {

    // Asynchronous kaam yaha likho
    let num = 5;

    if(num > 3) {
        res("promese fulfilled");
    }else{
        rej("promese rejected")
    }
});

// promise ko handle karna
promise.then((successMessage) => {
    console.log("suceess: ", successMessage);
}).catch((error) => {
    console.log("Error: ", error);
})

//