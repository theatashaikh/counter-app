const countValue = document.querySelector(".count-value");
const incrementCountBtn = document.querySelector(".increment-count-btn");
const resetCountBtn = document.querySelector(".reset-count-btn");
const currentYear = document.querySelector(".current-year");

// initial state of the counter.
let counter = 0;

// Increment the value of counter with every click.
incrementCountBtn.addEventListener("click", () => {
  countValue.style.color = "#000";
  counter++;
  countValue.innerText = counter;
});

// reset the counter back to zero.
resetCountBtn.addEventListener("click", () => {
  countValue.style.color = "#ccc";
  counter = 0;
  countValue.innerText = counter;
});

// Current year for example 2023.
currentYearValue = new Date().getFullYear();

// Will update automatically.
currentYear.innerText = currentYearValue;
