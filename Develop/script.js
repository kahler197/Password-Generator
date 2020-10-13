var generateBtn = document.querySelector("#generate");

var confirmLength;
var confirmSpecialCharacter;
var confirmNumber;
var confirmUpper;
var confirmLower;
var userInput;

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "W", "Z"];
var specialCharacter = ["!", "?", "#", "$", "%", "^", "*", "-", "_", "+"];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  confirmLength = prompt("how many characters would you like your password to contain?"); {

    if (!confirmLength) {
        alert("Please enter a value.");
    }

  else if (confirmLength <= 7 || confirmLength >= 129) { 
          alert("Password length must be between 8 and 128 characters. Please try again.");
           confirmLength = prompt("How many characters would you like your password to contain?");
  }

  else {

    confirmSpecialCharacter = confirm("Would you like to include special characters in your password?");
    
    confirmNumbers = confirm("Would you like to include numbers in your password?");

    confirmLower = confirm("Would you like to include lowercase characters in your password?");

    confirmUpper = confirm("Would you like to include uppercase characters in your password?");
  };

  if (confirmLower === true || confirmUpper === true || confirmNumber === true || confirmSpecialCharacter === true) {
  } else {
      alert("Please choose your password values.");
    }
  }    

  // all four values are clicked 

  if (confirmSpecialCharacter && confirmNumbers && confirmLower && confirmUpper) {
    userInput = specialCharacter.concat("numbers, lowerCase, upperCase");
  }

  // three values are clicked

  else if (confirmSpecialCharacter && confirmNumbers && confirmLower) {
    userInput = specialCharacter.concat("numbers, lowerCase");
  }

  else if (confirmSpecialCharacter && confirmNumbers && confirmUpper) {
    userInput = specialCharacter.concat("numbers, upperCase")
  }

  else if (confirmSpecialCharacter && confirmLower && confirmUpper) {
    userInput = specialCharacter.concat("lowerCase, upperCase")
  }

  else if (confirmNumbers && confirmLower && confirmUpperCase) {
    userInput = numbers.concat("lowerCase, upperCase")
  }

  // two values clicked
  
  else if (confirmNumbers && confirmSpecialCharacter) {
    userInput = numbers.concat(specialCharacter);
  }

  else if (confirmNumbers && confirmLower) {
    userInput = numbers.concat(lowerCase);
  }

  else if (confirmNumbers && confirmUpper) {
    userInput = numbers.concat(upperCase);
  }

  else if (confirmSpecialCharacter && confirmLower) {
    userInput = specialCharacter.concat(lowerCase);
  }

  else if (confirmSpecialCharacter && confirmUpper) {
    userInput = specialCharacter.concat(upperCase);
  }

  else if (confirmLower && confirmUpper) {
    userInput = lowerCase.concat(upperCase);
  }

  // one value clicked

  else if (confirmLower) {
    userInput = lowerCase
  }

  else if (confirmUpper) {
    userInput = upperCase
  }

  else if (confirmNumbers) {
    userInput = numbers
  }

  else if (confirmSpecialCharacter) {
    userInput = specialCharacter
  };

}








