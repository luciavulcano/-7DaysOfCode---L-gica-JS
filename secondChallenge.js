let yourName = "Uzumaki Naruto";
let yourAge = 16;
let programmingLanguage = "JavaScript";

console.log(
  `Hi, ${yourName}, you are ${yourAge} years old and already learning ${programmingLanguage}!`
);

// the extra challenge
let answer = 1; //change the value of answer to see the multiple results.

console.log(
  `Do you like to study ${programmingLanguage}? Change the variable above with 1 for 'yes', or 2 for 'no'.`
);

if (answer === 1) {
  console.log(`Great! Continue studying and you will become the hokage.`);
} else if (answer === 2) {
  console.log(`Oh, too bad... Maybe Sasuke wants to became the hokage...`);
} else {
  console.log(`Please, select 1 for 'yes' or 2 for 'no'`);
}
