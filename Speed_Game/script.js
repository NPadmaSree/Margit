const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const circles = document.querySelectorAll(".circle");
const overlay = document.querySelector(".overlay");
const answer = document.querySelector("#answer");
const closeButton = document.querySelector(".close");
const endanswer = document.querySelector("#endanswer");
const message = document.querySelector("#message");
let result = 0;
let active = 0;
let timer;
let pace = 1000;
let rounds = 0;
const audio = new Audio("assets/mixkit-achievement-bell-600.wav");
//random number function from W3 pade
const getRndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const clickCircle = (i) => {
  if (i !== active) {
    endGame();
  } else {
    const sound = new Audio("assets/mixkit-happy-bell-alert-601.wav");
    sound.play();
    result++;
    rounds--;
    answer.textContent = result;
  }
};
circles.forEach((circle, i) => {
  circle.addEventListener("click", () => clickCircle(i));
});

const startGame = () => {
  circles.forEach((circle) => {
    circle.style.pointerEvents = "auto";
  });
  startButton.classList.add("hidden");
  stopButton.classList.remove("hidden");
  // console.log(startButton.classList);
  //console.log(stopButton.classList);

  if (rounds >= 3) {
    return endGame();
  }
  let nextActive = pickNew(active);
  circles[nextActive].classList.toggle("active");
  circles[active].classList.remove("active");

  active = nextActive;

  //console.log("current active number is:", active);
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
  const lastsound = new Audio("assets/mixkit-positive-interface-beep-221.wav");
  lastsound.play();
  clearTimeout(timer);
  endanswer.textContent = result;
  if (result == 0) {
    message.textContent = "Hei! Start the game.";
  } else if (result >= 0 && result <= 20) {
    message.textContent = "It's okay! collect more next time.";
  } else if (result >= 20) {
    message.textContent = "Wonderful! Keepup the pace.";
  }
};
const resetGame = () => {
  window.location.reload();
};

startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", endGame);
closeButton.addEventListener("click", resetGame);
