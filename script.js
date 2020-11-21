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
  var passwordLength =parseInt(prompt('How long should the password BeforeUnloadEvent( 8< x < 128)?'));
  var password = '';
  var charPool = lowerletters

  var includelowerletter = confirm('Should Password include Uppercase Letters')
  if(includeupperletter){
    charPool = charPool.concat(upperletters)
  }

  for (let i = 0; i < passwordLength; i++)  {
    var randomNum = Math.floor(Math.random() * charPool.length)
    password = password + charPool[randomNum];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
