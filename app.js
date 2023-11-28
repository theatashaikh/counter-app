const countValue = document.querySelector(".count-value");
const incrementCountBtn = document.querySelector(".increment-count-btn");
const resetCountBtn = document.querySelector(".reset-count-btn");
const currentYear = document.querySelector(".current-year");

let counter = 0;

incrementCountBtn.addEventListener("click", () => {
  counter++;
  countValue.innerText = counter;
});

resetCountBtn.addEventListener("click", () => {
  counter = 0;
  countValue.innerText = counter;
});
