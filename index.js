
const button = document.querySelector(".button");
const score = document.querySelector(".score-counter");
const resetButton = document.querySelector(".reset");

let total = 0;

const buttonClickCounter = () => {
  button.addEventListener('click', () => {
    total += 1
    score.innerHTML = total;
  })
}

const resetFunction = () => {
  resetButton.addEventListener('click', () => {
    total = 0
    score.innerHTML = total;
  })
}

buttonClickCounter();
resetFunction();
