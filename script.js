// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var numbers = ['0', '1', '2', '3', '4', '5' ,'6' ,'7' ,'8','9',]
var symbols = ['!',',','\',','"','#','$','%','\&','\'','(',')','*','-','_','+','=','.','/',':',';','<','>','?','@','\\','[',']','^','`','~','{','}','|']

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordLength =parseInt(prompt('How long should the password Be? ( More than 8 less than 128 )?'));
  //   if(passwordLength > 7) {
  //       alert ("Please choose a number within 8 to 128.")
  //     return;
  //   } 

  //   else if(passwordLength < 129) {
  //     alert ("Please choose a number within 8 to 128.")
  //   return;
  // } 
  var password = '';
  var charPool = lowerletters

  var includeupperletter = confirm('Should Password include Uppercase Letters?')
  if(includeupperletter){
    charPool = charPool.concat(upperletters)
  }

  var includeNumbers = confirm('Should Password include Numbers?')
  if(includeNumbers){
    charPool = charPool.concat(numbers)
  }

  var includesymbols = confirm('Should Password include Special Characters?')
  if(includesymbols){
    charPool = charPool.concat(symbols)
  }

  for (let i = 0; i < passwordLength; i++)  {
    var randomNum = Math.floor(Math.random() * charPool.length)
    password = password + charPool[randomNum];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
