// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseChoice;
var upperCaseChoice;
var numberChoice;
var specialChoice;
//Arrays to be used in the code
let lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"]
var combinedChoice = []

function generatePassword() {
    let userInput = window.prompt (
        "How long does the password need to be? (Choose between 8-25 characters)"
    );

//Start of if statement for each piece of logic (lower case, upper case, numbers, special characters) | first piece determines number of characters
    if (userInput >=8 && userInput <= 25) {
        console.log("Valid Input")
//If statement for lower case letters
        if (confirm("Click OK to include lower case letters") == true) {
            var lowerCaseChoice = "Y";
            console.log("LC - Y");
        } else {
            var lowerCaseChoice = "N";
            console.log("LC - N");
        }
//If statement for upper case letters
        if (confirm("Click OK to include UPPER CASE letters?") == true) {
            var upperCaseChoice = "Y";
            console.log("UC - Y");
        } else {
            var upperCaseChoice = "N";
            console.log("UC - N");
        }
//If statement for numbers
        if (confirm("Click OK to include numbers") == true) {
            var numberChoice = "Y";
            console.log("NC - Y");
        } else {
            var numberChoice = "N";
            console.log("NC - N");
        }
//If statement for special characters
        if (confirm("Click OK to include !Special@ #Characters$?") == true) {
            var specialChoice = "Y";
            console.log("SC - Y");
        } else {
            var specialChoice = "N";
            console.log("SC - N");
        }
//! Start of if statment to provide password/feedback based on prior selections
// If lower case OK is selected | Add the lowerCaseArray to combinedChoice array.
        if (lowerCaseChoice == "Y") {
            combinedChoice.push(lowerCaseArray)
        }
// If lower case OK is selected | Add the lowerCaseArray to combinedChoice array.
        if (upperCaseChoice == "Y") {
            combinedChoice.push(upperCaseArray)
        }
// If lower case OK is selected | Add the lowerCaseArray to combinedChoice array.
        if (numberChoice == "Y") {
            combinedChoice.push(numberArray)
        }
        // If lower case OK is selected | Add the lowerCaseArray to combinedChoice array.
        if (specialChoice == "Y") {
            combinedChoice.push(specialArray)
        }
    

    
        }
    else {
        window.alert("Invalid Choice, Please Try Again");
        console.log("Invalid Input")
        this.generatePassword ();
    }
    }




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
