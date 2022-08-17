function result() {
  console.log("entered function");
  const x = Number.parseInt(prompt("Give first number."));
  const y = Number.parseInt(prompt("Give second number."));
  const z = Number.parseInt(prompt("Give third number."));

  if (x >= 0 || y >= 0 || z >= 0) {
    console.log(x + y + z);
    if (x >= 0 && y >= 0 && z >= 0) console.log(x * y * z);
  } else if (x < 0 && y < 0 && z < 0) {
    console.log("Only negatives");
  }
}
result();
