const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const circles = document.querySelectorAll(".circle");
const overlay = document.querySelector(".overlay");
const answer = document.querySelector("#answer");
const closeButton = document.querySelector(".close");
const endanswer = document.querySelector("#endanswer");
let result = 0;
let active = 0;
let timer;
let pace = 1000;
let rounds = 0;

//random number function from W3 pade
const getRndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const clickCircle = (i) => {
  if (i !== active) {
    endGame();
  } else {
    result++;
    rounds--;
    answer.textContent = result;
  }

  /* answer.textContent = +answer.textContent + 1; */
};
circles.forEach((circle, i) => {
  circle.addEventListener("click", () => clickCircle(i));
});

const startGame = () => {
  startButton.classList.add("hidden");
  stopButton.classList.remove("hidden");
  console.log(startButton.classList);
  console.log(stopButton.classList);
  if (rounds >= 3) {
    return endGame();
  }
  let nextActive = pickNew(active);
  circles[nextActive].classList.toggle("active");
  circles[active].classList.remove("active");

  active = nextActive;

  console.log("current active number is:", active);
  timer = setTimeout(startGame, pace);
  pace = pace - 10;
  rounds++;

  function pickNew(active) {
    let nextActive = getRndInt(0, 3);

    if (nextActive != active) {
      return nextActive;
    } else {
      return pickNew(active);
    }
  }
};

const endGame = () => {
  overlay.style.visibility = "visible";
  clearTimeout(timer);
  endanswer.textContent = result;
};
const resetGame = () => {
  window.location.reload();
};

startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", endGame);
closeButton.addEventListener("click", resetGame);
