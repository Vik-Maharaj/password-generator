// declared variables

var generateBtn = document.querySelector("#generate");
var userCharLength; 
var userLowerCaseOrNo;
var userUpperCaseOrNo;
var userNumericCharOrNo;
var userSpecCharOrNo;



// generator logic

function randomizer01() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < userCharLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function randomizer02() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < userCharLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function randomizer03() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (var i = 0; i < userCharLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function randomizer04() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var i = 0; i < userCharLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function randomizer05() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < userCharLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function randomizer06() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var i = 0; i < userCharLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function randomizer07() {
  var text = "";
  var possible = "0123456789";

  for (var i = 0; i < userCharLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function randomizer08() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%&'()*+,-./:;<=>?@[]^_{|}~";

  for (var i = 0; i < userCharLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function randomizer09() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz!$%&'()*+,-./:;<=>?@[]^_{|}~";

  for (var i = 0; i < userCharLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function randomizer10() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!$%&'()*+,-./:;<=>?@[]^_{|}~";

  for (var i = 0; i < userCharLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function randomizer11() {
  var text = "";
  var possible = "0123456789!$%&'()*+,-./:;<=>?@[]^_{|}~";

  for (var i = 0; i < userCharLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function randomizer12() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!$%&'()*+,-./:;<=>?@[]^_{|}~";

  for (var i = 0; i < userCharLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function randomizer13() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz0123456789!$%&'()*+,-./:;<=>?@[]^_{|}~";

  for (var i = 0; i < userCharLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function randomizer14() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!$%&'()*+,-./:;<=>?@[]^_{|}~";

  for (var i = 0; i < userCharLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
function randomizer15() {
  var text = "";
  var possible = "!$%&'()*+,-./:;<=>?@[]^_{|}~";

  for (var i = 0; i < userCharLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}









var startVPasswordGenerator = function() {
  userCharLength = window.prompt('Welcome. How many characters would you like your password to be? (choose a number between 1 and 128 characters)');
  

  if(userCharLength <= 0 || userCharLength >= 127) {
    alert("Password length must be between 1 and 128 characters. Please try again");
    var userCharLengthInput = window.prompt('Welcome. How many characters would you like your password to be? (choose a number between 1 and 128 characters)');
    }

    console.log(userCharLength);

    userLowerCaseOrNo = window.prompt('Would you like your password to include lowercase characters?');
    console.log(userLowerCaseOrNo);

    userUpperCaseOrNo = window.prompt('Would you like your password to include uppercase characters?');
    console.log(userUpperCaseOrNo);

    userNumericCharOrNo = window.prompt('Would you like your password to include numeric characters?');
    console.log(userNumericCharOrNo);

    userSpecCharOrNo = window.prompt('Would you like your password to include special characters?');
    console.log(userSpecCharOrNo);

      if(userLowerCaseOrNo === "" && userUpperCaseOrNo === "" && userNumericCharOrNo === "" && userSpecCharOrNo === "") {
      alert("You must choose at least one password criteria");
      userLowerCaseOrNo = window.prompt('Would you like your password to include lowercase characters?');
      console.log(userLowerCaseOrNo);

      userUpperCaseOrNo = window.prompt('Would you like your password to include uppercase characters?');
      console.log(userUpperCaseOrNo);

      userNumericCharOrNo = window.prompt('Would you like your password to include numeric characters?');
      console.log(userNumericCharOrNo);

      userSpecCharOrNo = window.prompt('Would you like your password to include special characters?');
      console.log(userSpecCharOrNo);
  }
  

}

generateBtn.addEventListener("click", startVPasswordGenerator);















// this returns a value to the text field after running through the prompts

function writePasswordToField() {
    var password = randomizer04();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = "Thank you. Your password is: " + password;
}

generateBtn.addEventListener("click", writePasswordToField);

















