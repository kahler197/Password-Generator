var generateBtn = document.querySelector("#generate");

var confirmLength;
var confirmSpecialCharacter;
var confirmNumbers;
var confirmUpperCase;
var confirmLowerCase;
var choice;

number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "W", "Z"];
confirmSpecialCharacter = ["!", "?", "#", "$", "%", "^", "*", "-", "_", "+"];

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  confirmLength = prompt("how many characters would you like your password to contain?"); {

    if (!confirmLength) {
        alert("Value Required");
    }

  else if (confirmLength <= 7 || confirmLength >= 129) { 
          alert("Password length must be between 8 and 128 characters. Please try again.");
           confirmLength = prompt("How many charactgers would you like your password to contain?");
  }

  else {

    confirmSpecialCharacter = confirm("Would you like to include special characters in your password?");
    
    confirmNumbers = confirm("Would you like to include numbers in your password?");

    confirmLowerCase = confirm("Would you like to include lowercase characters in your password?");

    confirmUpperCase = confirm("Would you like to include uppercase charactgers in your password?");
  };

  if (confirmLowerCase === true || confirmUpperCase === true || confirmNumbers === true || confirmSpecialCharacter === true) {
  } else {
      alert("Please choose your password values.");
    }
  }    

  // all four value are clicked 

  if (confirmSpecialCharacter && confirmNumbers && confirmLowerCase && confirmUpperCase) {
    choice = number.concat("specialCharacter, lowerCase, upperCase");
  }








}
