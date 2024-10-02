let a = 1000; // <--- This is a Globle Scope

if (true) {
    let a = 500;
    console.log('This is a Local Scope:-> ',a) //// <--- This is a local Scop
}

console.log('This is a Globle Scope:-> ',a) // <--- This is a Globle Scope