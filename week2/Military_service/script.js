//Make a program that asks the age of the user.
//If the age is less than 18, the text "too young" is printed.
//If the age is less than 27, the text "Right age for military service" is displayed on the console.
//If the age is less than 41, the text "You are in reserve" is displayed on the console.
//If the age is less than 55, the text "You are in baclup reserve" is displayed on the console
//In all other cases,"too aged" is displayed on the console.

function user() {
  const age = prompt("Type your age below");
  if (age < 18) {
    return console.log("Too young.");
  } else if (age < 27) {
    return console.log("Right age for millitary service.");
  } else if (age < 41) {
    return console.log("You are in reserve.");
  } else if (age < 55) {
    return console.log("You are in backup Reserver.");
  } else {
    return console.log("Too aged.");
  }
}
user();

//Margit's solution
//const checkAge = () => {
//const age = window.prompt('How old are you?');

//if (age < 18) {
//return console.log('You are too young');
//} else if (age < 27) {
//return console.log('Right age for military service');
//} else if (age < 41) {
//return console.log('You are in reserve');
//} else if (age < 55) {
//return console.log('You are in backup reserve');
//} else {
//return console.log('you are too old');
//}
//};

//checkAge();
