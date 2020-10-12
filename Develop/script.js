var generateBtn = document.querySelector("#generate");

var confirmLength
var confirmSpecialCharacter
var confirmNumber
var confirmUpperCase
var confirmLowerCase



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
