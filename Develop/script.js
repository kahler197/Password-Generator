var generateBtn = document.querySelector("#generate");

var confirmLength
var confirmSpecialCharacter
var confirmNumbers
var confirmUpperCase
var confirmLowerCase

var link = document.getElementById(generate)

var confirmLength = prompt("how many characters would you like your password to contain?");

while(confirmLength <= 7 || confirmLength >= 129) { 
  alert("Password length must be between 8 and 128 characters. Please try again.");
  var confirmLength = prompt("How many charactgers would you like your password to contain?");
}

var confirmSpecialCharacter = confirm("Would you like to include special characters in your password?");

var confirmNumbers = confirm("Would you like to include numbers in your password?");

var confirmLowerCase = confirm("Would you like to include lowercase characters in your password?");

var confirmUpperCase = confirm("Would you like to include uppercase charactgers in your password?");

if (confirmLowerCase === true|| confirmUpperCase === true) {
} else {
    alert("Please choose uppercase characters, lowercase characters or both.");
  }



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
