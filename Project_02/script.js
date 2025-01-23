// const form = document.querySelector("form");

// // This usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector("#height").value);
//   const weight = parseInt(document.querySelector("#weight").value);
//   const results = document.querySelector("#results");
//   const resultVal = document.querySelector("#resultVal");

//   if (height === "" || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   }
//   // results.innerHTML = ` ${height}`;
//   else if (weight === "" || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid height ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     // show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//     if (bmi <= 18.6) {
//       resultVal.innerHTML = `<span>Your BMI is Underweight = ${bmi}</span>`;
//     } else if (bmi > 18.6 && bmi <= 24.9) {
//       resultVal.innerHTML = `<span>Your BMI is in the Normal Range = ${bmi}</span>`;
//     } else if (bmi > 24.9) {
//       resultVal.innerHTML = `<span>Your BMI is Overweight = ${bmi}</span>`;
//     }
//   }
// });

const form = document.querySelector("form");

// Yeh us input field ke andar jo value user ne daali hai, usko le lega..value se jo value milti hai woh by default string hoti hai
// parseInt() function us string ko ek integer (number) mein convert kar deta hai.
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  let results = document.querySelector("#results");
  const resultVal = document.querySelector("#resultVal");

  if ((height === "" || isNaN(height) || height <= 0)) {
    results.innerHTML = `Please give a valid height`;
    return;
  } else if ((weight === "" || weight <= 0 || isNaN(weight))) {
    results.innerHTML = `Please give a valid height `;
    return;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>Your BMI is ${bmi}</span>`;

    if(bmi <= 18.6){
      resultVal.innerHTML = `<span>Your BMI is Underweight = ${bmi}</span>`
    }else if (bmi >= 18.6 && bmi <=24.9){
      resultVal.innerHTML = `<span>Your BMI is Normal weight = ${bmi}</span>`
    }else if (24.9){
      resultVal.innerHTML = `<span>Your BMI is Overweight = ${bmi}</span>`
    }

  }
});
