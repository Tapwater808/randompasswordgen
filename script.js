// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
var specialChar = ["!", "\"", "#", "$", "%","\&", "\'", "(", ")", "*", "-", "_", "+", "=", ".", "/",  ":", ";", "<", ">", "?", "@", "\\", "[", "]", "^", "`", "~", "{", "}", "|"]
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
var lowercase = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
alert('generate password')

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


const random = Math.floor(Math.random() * numbers.length);
console.log(random, numbers[random]);

const random = Math.floor(Math.random() * specialChar.length);
console.log(random, specialChar[random]);

const random = Math.floor(Math.random() * lowercase.length);
console.log(random, lowercase[random]);

const random = Math.floor(Math.random() * uppercase.length);
console.log(random, uppercase[random]);