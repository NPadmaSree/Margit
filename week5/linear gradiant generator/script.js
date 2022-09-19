const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const display = document.querySelector(".display");
const dirs = document.querySelectorAll('input[name="dir"]');
const css = document.querySelector("#css");
let dir = "bottom";
let c1 = "#98ecc0";
let c2 = "#9e7cee";

const updateDisplay = () => {
  display.style.background = `linear-gradient(to ${dir}, ${c1}, ${c2}) no-repeat fixed
    center center/cover`;
  css.textContent = `linear-gradient(to ${dir}, ${c1}, ${c2});`;
};

color1.addEventListener("input", () => {
  c1 = color1.value;
  updateDisplay();
});

color2.addEventListener("input", () => {
  c2 = color2.value;
  updateDisplay();
});

dirs.forEach((direction) =>
  direction.addEventListener("change", () => {
    dir = direction.value;
    updateDisplay();
  })
);

color1.value = c1;
color2.value = c2;
updateDisplay();
