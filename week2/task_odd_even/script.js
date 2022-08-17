function number() {
  const a = Number.parseInt(prompt("Give a number."));

  if (a >= 0 && a % 2 == 0) {
    console.log("Number is even.");
  } else {
    console.log("Number is odd.");
  }
}
number();
