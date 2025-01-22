const form = document.querySelector("form");

// This usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const resultVal = document.querySelector("#resultVal");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  // results.innerHTML = ` ${height}`;
  else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi <= 18.6) {
      resultVal.innerHTML = `<span>Your BMI is Underweight = ${bmi}</span>`;
    } else if (bmi > 18.6 && bmi <= 24.9) {
      resultVal.innerHTML = `<span>Your BMI is in the Normal Range = ${bmi}</span>`;
    } else if (bmi > 24.9) {
      resultVal.innerHTML = `<span>Your BMI is Overweight = ${bmi}</span>`;
    }
  }   
});
