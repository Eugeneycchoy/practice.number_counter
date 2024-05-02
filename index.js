// Retrievals
let displayedCount = document.querySelector("h1");
let decreaseBtn = document.querySelector("#decrease-btn");
let increaseBtn = document.querySelector("#increase-btn");
let resetBtn = document.querySelector("#reset-btn");

// Variables
let count = 0;

// Listeners
decreaseBtn.addEventListener("click", () => {
  count--;
  displayedCount.innerHTML = count;
});

increaseBtn.addEventListener("click", () => {
  count++;
  displayedCount.innerHTML = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  displayedCount.innerHTML = count;
});
