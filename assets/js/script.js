// declared variables

var generateBtn = document.querySelector("#generate");
var userCharLength; 
var userLowerCaseOrNo;
var userUpperCaseOrNo;
var userNumericCharOrNo;
var userSpecCharOrNo;



// random generator logic

function vikRandomInt() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < userCharLength; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}





// this prompts the user when they first clicks the button

var startVPasswordGenerator = function() {
  userCharLength = window.prompt('Welcome. How many characters would you like your password to be? (choose a number between 8 and 128 characters)');
  console.log(userCharLength);

  userLowerCaseOrNo = window.prompt('Would you like your password to include lowercase characters?');
  console.log(userLowerCaseOrNo);

  userUpperCaseOrNo = window.prompt('Would you like your password to include uppercase characters?');
  console.log(userUpperCaseOrNo);

  userNumericCharOrNo = window.prompt('Would you like your password to include numeric characters?');
  console.log(userNumericCharOrNo);

  userSpecCharOrNo = window.prompt('Would you like your password to include special characters?');
  console.log(userSpecCharOrNo);

}

generateBtn.addEventListener("click", startVPasswordGenerator);








// this returns a value to the text field after running through the prompts

function writePasswordToField() {
    var password = vikRandomInt();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePasswordToField);

















