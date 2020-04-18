// GIVEN I need a new, secure password

let lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
let upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
let numbers = ['0123456789'];
let symbols = ['!@#$%^&*(){}[]=<>/+-_|~'];
let userChoices = [];
let stringPassword = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // WHEN I click the button to generate a password
  // THEN I am presented with a series of prompts for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  const confirmLower = confirm("Do you want to use lower case letters?");
    if (confirmLower) {
      userChoices.push(lowerCase);
    }

  const confirmUpper = confirm("Do you want to use upper case letters?");
    if (confirmUpper) {
      userChoices.push(upperCase);
    }

  const confirmNumbers = confirm("Do you want to use numbers?");
    if (confirmNumbers) {
      userChoices.push(numbers);
    }

  const confirmSymbols = confirm("Do you want to use symbols?");
    if (confirmSymbols) {
      userChoices.push(symbols);
    }
  
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters

    let getLength = prompt("Choose the length of your password from 8 to 128 characters.");
  
    if (getLength < 8 || getLength > 128) {
      alert("Incorrect. Please choose between 8 and 128 characters");
      return "Yes";
    }

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

  
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
  let joinedChoices = userChoices.join('');

    for (var i = 0, n = joinedChoices.length; i < getLength; i++) {
      stringPassword += joinedChoices.charAt(Math.floor(Math.random() * n));
    }

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

  var passwordText = document.querySelector("#password");

  passwordText.value = stringPassword;

}

