// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseChoice;
var upperCaseChoice;
var numberChoice;
var specialChoice;
//Arrays to be used in the code
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"]

// function randomInt (min, max) {
//     if (!max) {
//         max = min
//         min = 0
//     }

// var rand = math.random()
//     return Math.floor(min*(1-rand)+ rand*max)
// }

// function getRandomItem(list) {
//     return list[randomInt(list.length)]
// }

function generatePassword() {
    
    var userInput = window.prompt("How long do you want your password to be? (8-128)")
    
    var passwordLength = userInput

    var combinedChoice = []

    console.log(userInput)

//Start of if statement for each piece of logic (lower case, upper case, numbers, special characters) | first piece determines number of characters
    if (passwordLength >=8 && passwordLength <= 128) {
        console.log("Valid Input")
    }
// If the user input is less than the number 8
    if  (passwordLength <8) {
        window.alert("Invalid Choice, input must be at least 8!");
        console.log("Invalid Input")
        return
    }
// If the user input is greater than the number 128
    if  (passwordLength >128) {
        window.alert("Invalid Choice, input must be less than 128!");
        console.log("Invalid Input")
        return
    }
// If the user enters a value that is not a number
    if  (isNaN(passwordLength)) {
        window.alert("Invalid Choice, must be a number between 8-128. Try again!");
        console.log("Invalid Input")
        return
    }
//! ADD IF STATEMENT FOR ANYTHING ENTERED NOT A NUMBER

//If statement for lower case letters
    if (confirm("Click OK to include lower case letters") == true) {
        var lowerCaseChoice = "Y"
        console.log("LC - Y")
    } else {
        var lowerCaseChoice = "N"
        console.log("LC - N")
    }
//If statement for upper case letters
    if (confirm("Click OK to include UPPER CASE letters?") == true) {
        var upperCaseChoice = "Y"
        console.log("UC - Y")
    } else {
        var upperCaseChoice = "N"
        console.log("UC - N")
    }
//If statement for numbers
    if (confirm("Click OK to include numbers") == true) {
        var numberChoice = "Y"
        console.log("NC - Y")
    } else {
        var numberChoice = "N"
        console.log("NC - N")
    }
//If statement for special characters
    if (confirm("Click OK to include !Special@ #Characters$?") == true) {
        var specialChoice = "Y"
        console.log("SC - Y")
    } else {
        var specialChoice = "N"
        console.log("SC - N")
    }


//! Start of if statment to provide password/feedback based on prior selections
// If lower case OK is selected | Add the lowerCaseArray to combinedChoice array.
    if (lowerCaseChoice === "Y") {
        combinedChoice.push(lowerCaseArray)
    }
// If upper case OK is selected | Add the lowerCaseArray to combinedChoice array.
    if (upperCaseChoice === "Y") {
        combinedChoice.push(upperCaseArray)
    }
// If number OK is selected | Add the lowerCaseArray to combinedChoice array.
    if (numberChoice === "Y") {
        combinedChoice.push(numberArray)
    }
// If special character OK is selected | Add the lowerCaseArray to combinedChoice array.
    if (specialChoice === "Y") {
        combinedChoice.push(specialArray)
    }
// If no options are chosen, default to just the lowerCaseArray
    if (combinedChoice.length === 0) {
        alert("You need to choose at least one section! Please try again.")
        console.log("No option chosen")
        }
// Let's log the new array to double check!
    console.log(combinedChoice)
//!Creation of the Password STILL NEED TO WORK ON

        
        for (var i = 0; i < combinedChoice; i++) {
            var randomList = getRandomItem(combinedChoice)
            var randomChar = getRandomItem(randomList)
            console.log(randomChar)
            generatePassword += randomChar
        }

    
    }





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
