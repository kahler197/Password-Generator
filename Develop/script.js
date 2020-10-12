var generateBtn = document.querySelector("#generate");

var confirmLength
var confirmSpecialCharacter
var confirmNumber
var confirmUpperCase
var confirmLowerCase

var link = document.getElementById(generate)

var confirmLength = prompt("how many characters would you like your password to contain?");

while(confirmLength <= 7 || confirmLength >= 129) { 
  alert("Password length must be between 8 and 128 characters. Please try again.");
  var confirmLength = prompt("How many charactgers would you like your password to contain?");
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
