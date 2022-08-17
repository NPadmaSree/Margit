function salarycal() {
  const salary = parseInt(prompt("Type your hourly salary here."));
  const hours = parseInt(prompt("Type the number of hours you worked here"));
  if (hours <= 7) {
    console.log("Your salary for the day is", salary * hours);
  } else if (hours > 7 && hours <= 9) {
    console.log(
      "Your salary for the day is",
      hours * salary + (hours - 7) * (0.5 * salary)
    );
  } else if (hours > 9) {
    console.log(
      "Your salary for the day is",
      hours * salary + 2 * (0.5 * salary) + (hours - 9) * salary
    );
  }
}

salarycal();
