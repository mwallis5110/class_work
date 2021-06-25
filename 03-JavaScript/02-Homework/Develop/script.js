// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialChar = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';','<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Allows user to set length of password
var passLength = prompt('How many characters would you like in your password? (Min: 8, Max: 128)');

// Accounts for users inputting anything besides a number
if ((passLength >= 9 && passLength <= 128) && (!isNaN(passLength))) {
  console.log('This number works!');
} else {
  console.log('Try again');
  prompt('Please type a numerical character between 8 and 128');
}

//Allows users to include lowercase characters
var includeLower = confirm("Would you like to include lowercase characters in your password?");
console.log(includeLower);
if(includeLower === true) {
  alert("Adding lowercase characters");
  console.log("Adding lowercase characters");
} else {
  lowerCase.length = 0;
  console.log("Ok, we'll leave those out")
}

//Allows users to include uppercase characters
var includeUpper = confirm("Would you like to include uppercase characters in your password?");
console.log(includeUpper);
if(includeUpper === true) {
  alert("Adding uppercase characters");
  console.log("Adding uppercase characters");
} else {
  upperCase.length = 0;
  console.log("We'll leave those out")
}

//Allows users to include special characters
  var includeSpecial = confirm("Would you like to include special characters in your password?");
  console.log(includeSpecial);
  if(includeSpecial === true) {
    alert("Adding special characters");
    console.log("Adding special characters");
  } else {
    specialChar.length = 0;
    console.log("We won't include those")
  }
//Allows users to include numbers
  var includeNumbers = confirm("What about including numbers?");
  console.log(includeNumbers);
  if (includeNumbers === true) {
    alert('Adding numbers');
    console.log('Adding numbers');
  } else {
    numbers.length = 0;
    console.log("We won't include any numbers this time");
  }

  var superArray = upperCase.concat(lowerCase, specialChar, numbers);
//Generates password 
function generatePassword() { 
  let password = '';
  for (let i = 0; i < passLength; i++) {
    var randomNumber = Math.floor(Math.random() * superArray.length);
    password += superArray[randomNumber];
  }  
  return password;
}