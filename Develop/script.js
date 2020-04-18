// GIVEN I need a new, secure password

let lowerCase =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', '=', '<', '>', '/', '+', '-', '_', '|', '~'];
let userChoices = [];

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
  const confirmUpper = confirm("Do you want to use upper case letters?");
  const confirmNumbers = confirm("Do you want to use numbers?");
  const confirmSymbols = confirm("Do you want to use symbols?");

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters

  setLength();

  function setLength () {
    let getLength = prompt("Choose the length of your password from 8 to 128 characters.");
  
    if (parseInt(getLength) < 8 || parseInt(getLength) > 128) {
      alert("Incorrect. Please choose between 8 and 128 characters");
      setLength();
    }
  }

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

  
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

  var password = generatePassword();

  function generatePassword () {
    if (confirmLower === true) {
      userChoices.push(lowerCase);
      console.log(userChoices);
    }
    if (confirmUpper === true) {
      userChoices.push(upperCase);
      console.log(userChoices);
    }
    if (confirmNumbers === true) {
      userChoices.push(numbers);
      console.log(userChoices);
    }
    if (confirmSymbols === true) {
      userChoices.push(symbols);
      console.log(userChoices);
    }

  }

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




//Possible functions-http://net-comber.com/charset.html
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.+-_\|~';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
