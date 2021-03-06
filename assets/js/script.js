// declared variables

var generateBtn = document.querySelector("#generate");
var userCharLength; 
var userLowerCaseOrNo;
var userUpperCaseOrNo;
var userNumericCharOrNo;
var userSpecCharOrNo;
var randomizerCalculator;
var randomizerValue;



// functions to calculate the various prompt responses

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





// function to gather user inputs and conditional statements to sort input criteria

var startVPasswordGenerator = function() {
  userCharLength = window.prompt('Welcome. How many characters would you like your password to be? (choose a number between 8 and 128 characters)');
  
  if(userCharLength <= 7 || userCharLength >= 129) {
    alert("Password length must be between 8 and 128 characters. Please try again");
    userCharLength = window.prompt('Welcome. How many characters would you like your password to be? (choose a number between 8 and 128 characters)');
    }
    if(userCharLength <= 7 || userCharLength >= 129) {
      alert("Password length must be between 8 and 128 characters. Please try again");
      userCharLength = window.prompt('Welcome. How many characters would you like your password to be? (choose a number between 8 and 128 characters)');
      }
      if(userCharLength <= 7 || userCharLength >= 129) {
        alert("Password length must be between 8 and 128 characters. Please try again");
        userCharLength = window.prompt('Welcome. How many characters would you like your password to be? (choose a number between 8 and 128 characters)');
        }

    alert('Your password will be ' + userCharLength + ' characters long');

    console.log(userCharLength)

    userLowerCaseOrNo = window.confirm("Click OK to include lowercase characters or Cancel to not include lowercase characters");
    console.log(userLowerCaseOrNo);

    userUpperCaseOrNo = window.confirm("Click OK to include uppercase characters or Cancel to not include uppercase characters");
    console.log(userUpperCaseOrNo);

    userNumericCharOrNo = window.confirm("Click OK to include numeric characters or Cancel to not include numeric characters"); 
    console.log(userNumericCharOrNo);

    userSpecCharOrNo = window.confirm("Click OK to include special characters or Cancel to not include special characters");
    console.log(userSpecCharOrNo);


      while(userLowerCaseOrNo === false && userUpperCaseOrNo === false && userNumericCharOrNo === false && userSpecCharOrNo === false) {
      alert("You must choose at least one password criteria");
      userLowerCaseOrNo = window.confirm("Click OK to include lowercase characters or Cancel to not include lowercase characters");
      console.log(userLowerCaseOrNo);

      userUpperCaseOrNo = window.confirm("Click OK to include uppercase characters or Cancel to not include uppercase characters");
      console.log(userUpperCaseOrNo);

      userNumericCharOrNo = window.confirm("Click OK to include numeric characters or Cancel to not include numeric characters"); 
      console.log(userNumericCharOrNo);

      userSpecCharOrNo = window.confirm("Click OK to include special characters or Cancel to not include special characters");
      console.log(userSpecCharOrNo);
  }
  

  function randomizerCalculator() {
    if (userLowerCaseOrNo === true && userUpperCaseOrNo === false && userNumericCharOrNo === false && userSpecCharOrNo === false) {
      randomizerValue = randomizer01;
    }
    else if (userLowerCaseOrNo === false && userUpperCaseOrNo === true && userNumericCharOrNo === false && userSpecCharOrNo === false) {
      randomizerValue = randomizer02;
    }
    else if (userLowerCaseOrNo === true && userUpperCaseOrNo === true && userNumericCharOrNo === false && userSpecCharOrNo === false) {
      randomizerValue = randomizer03;
    }
    else if (userLowerCaseOrNo === true && userUpperCaseOrNo === true && userNumericCharOrNo === true && userSpecCharOrNo === false) {
      randomizerValue = randomizer04;
    }
    else if (userLowerCaseOrNo === true && userUpperCaseOrNo === false && userNumericCharOrNo === true && userSpecCharOrNo === false) {
      randomizerValue = randomizer05;
    }
    else if (userLowerCaseOrNo === false && userUpperCaseOrNo === true && userNumericCharOrNo === true && userSpecCharOrNo === false) {
      randomizerValue = randomizer06;
    }
    else if (userLowerCaseOrNo === false && userUpperCaseOrNo === false && userNumericCharOrNo === true && userSpecCharOrNo === false) {
      randomizerValue = randomizer07;
    }
    else if (userLowerCaseOrNo === true && userUpperCaseOrNo === true && userNumericCharOrNo === true && userSpecCharOrNo === true) {
      randomizerValue = randomizer08;
    }
    else if (userLowerCaseOrNo === true && userUpperCaseOrNo === false && userNumericCharOrNo === false && userSpecCharOrNo === true) {
      randomizerValue = randomizer09;
    }
    else if (userLowerCaseOrNo === false && userUpperCaseOrNo === true && userNumericCharOrNo === false && userSpecCharOrNo === true) {
      randomizerValue = randomizer10;
    }
    else if (userLowerCaseOrNo === false && userUpperCaseOrNo === false && userNumericCharOrNo === true && userSpecCharOrNo === true) {
      randomizerValue = randomizer11;
    }
    else if (userLowerCaseOrNo === true && userUpperCaseOrNo === true && userNumericCharOrNo === false && userSpecCharOrNo === true) {
      randomizerValue = randomizer12;
    }
    else if (userLowerCaseOrNo === true && userUpperCaseOrNo === false && userNumericCharOrNo === true && userSpecCharOrNo === true) {
      randomizerValue = randomizer13;
    }
    else if (userLowerCaseOrNo === false && userUpperCaseOrNo === true && userNumericCharOrNo === true && userSpecCharOrNo === true) {
      randomizerValue = randomizer14;
    }
    else if (userLowerCaseOrNo === false && userUpperCaseOrNo === false && userNumericCharOrNo === false && userSpecCharOrNo === true) {
      randomizerValue = randomizer15;
    }
  }
    
  randomizerCalculator();


}

generateBtn.addEventListener("click", startVPasswordGenerator);






// function to return a value after calculating the prompt responses

function writePasswordToField() {
    var password = randomizerValue();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = "Thank you. Your password is: " + password;
}

generateBtn.addEventListener("click", writePasswordToField);
















