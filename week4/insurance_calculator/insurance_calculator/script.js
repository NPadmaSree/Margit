const form = document.querySelector("form");
const customer = document.querySelector("#name");
const age = document.querySelector("#age");
const healthconditions = document.querySelectorAll('input[type="checkbox"]');
const habbits = document.querySelectorAll('input[type="checkbox"]');
const calculate = document.querySelector("#calculate");

const inscal = (event) => {
  event.preventDefault();
  let customerName = customer.value;
  let customerAge = age.value;
  let healthResult = [];
  let habbitResult = [];
  let amount = 500;
  let increase = 0;

  if (age.value >= 18 && age.value <= 25) increase = 10;
  if (age.value >= 26 && age.value <= 35) increase = 30;
  if (age.value >= 36 && age.value <= 45) increase = 60;
  if (age.value >= 46 && age.value <= 55) increase = 100;
  if (age.value >= 56 && age.value <= 65) increase = 150;
  if (age.value >= 66) increase = 210;
  amount += amount * 0.01 * increase;

  increase = 0;
  healthconditions.forEach((item) => {
    if (item.checked) {
      increase++;
    }
  });
  amount += amount * 0.01 * increase;
  increase = 0;
  habbits.forEach((item) => {
    if (item.checked) {
      if (item.value === "good") increase -= 5;
      else if (item.value === "bad") increase += 5;
    }
  });
  amount += amount * 0.01 * increase;
  calculate.textContent = `Dear ${customerName}, of age ${customerAge}, your risk score is: ${amount}`;
  form.reset();
};

form.addEventListener("submit", inscal);
