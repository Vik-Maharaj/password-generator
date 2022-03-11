// this prompts the user when they first clicks the button

var generateBtn = document.querySelector("#generate");

var startVPasswordGenerator = function() {
  window.alert("Hello There");
}

generateBtn.addEventListener("click", startVPasswordGenerator);

// startVPasswordGenerator();



// this returns a value to the text field after running through the prompts

function writePasswordToField() {
    var password = "hello again";
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePasswordToField);

















