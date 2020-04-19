// Arrays for confirm variables

let lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
let upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
let numbers = ['0123456789'];
let symbols = ['!@#$%^&*(){}[]=<>/+-_|~'];
let userChoices = [];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // Series of confirm statements for password criteria
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
    if (!confirmLower && !confirmUpper && !confirmNumbers && !confirmSymbols) {
      alert("You must choose at least one character type. Press Generate Password again.");
      return;
    }
  
  //Get character length to generate password
    let getLength = prompt("Choose the length of your password from 8 to 128 characters.");
    if (!getLength) {
      alert("Please enter a value for the password length. Press Generate Password again.");
    } else if (getLength < 8 || getLength > 128) {
      alert("Incorrect. Please choose between 8 and 128 characters. Press Generate Password again.");
      return "Yes";
    }
  
// Combine criteria to generate password
  let joinedChoices = userChoices.join('');
  let stringPassword = "";

    for (var i = 0, n = joinedChoices.length; i < getLength; i++) {
      stringPassword += joinedChoices.charAt(Math.floor(Math.random() * n));
    }

  //Generated password is displayed on page

  var passwordText = document.querySelector("#password");

  passwordText.value = stringPassword;

}

