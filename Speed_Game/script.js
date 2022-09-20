const startbutton = document.querySelector("#start");
const stopbutton = document.querySelector("#stop");
const circles = document.querySelectorAll("circle");
const startGame = () => {
  console.log("Game started");
};
const endGame = () => {
  console.log("Game ended");
};

startbutton.addEventListener("click", startGame);
stopbutton.addEventListener("click", endGame);
