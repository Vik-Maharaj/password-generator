// this prompts the user when they first clicks the button

var generateBtn = document.querySelector("#generate");

var startVPasswordGenerator = function() {
  var userCharLength = window.prompt('Welcome. How many characters would you like your password to be? (choose a number between 8 and 128 characters)');
  console.log(userCharLength);

  var userLowerCaseOrNo = window.prompt('Would you like your password to include lowercase characters?');
  console.log(userLowerCaseOrNo);

  var userUpperCaseOrNo = window.prompt('Would you like your password to include uppercase characters?');
  console.log(userUpperCaseOrNo);

  var userNumericCharOrNo = window.prompt('Would you like your password to include numeric characters?');
  console.log(userNumericCharOrNo);

  var userSpecCharOrNo = window.prompt('Would you like your password to include special characters?');
  console.log(userSpecCharOrNo);

}

generateBtn.addEventListener("click", startVPasswordGenerator);









// this returns a value to the text field after running through the prompts

function writePasswordToField() {
    var password = "hello again";
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePasswordToField);

















