var generateBtn = document.querySelector("#generate");
var selectChar
var charArray = []
var upppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "`", "{", "|", "}", "~"];
var length = 0
var lowercaseTrue;
var uppercaseTrue;
var numericTrue;
var specialTrue;
var passwordArray = []

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function passwordLength() {
  var passwordLength = prompt("How many characters do you want your password? Passwords must be between 8 and 128 characters.")
  if (passwordLength > 7 || passwordLength < 129) {
    length = passwordLength
  }
  else {
    length = 8;
  }
}

passwordLength();
function uppercase() {
  var uppercaseAnsw = prompt("Do you want to use uppercase letters in your password? (Yes or No)")
  uppercaseTrue = Boolean(uppercaseAnsw == "Yes")
  if (uppercaseTrue) {
    charArray = charArray.concat(upppercaseArray);
  }
}
uppercase();

function lowercase() {
  var lowercaseAnsw = prompt("Do you want to use lowercase letters in your password? (Yes or No)")
  lowercaseTrue = Boolean(lowercaseAnsw == "Yes")
  if (lowercaseTrue == true) {
    charArray = charArray.concat(lowercaseArray);
  }
}
lowercase();

function numeric() {
  var numericAnsw = prompt("Do you want to use numbers in your password? (Yes or No)")
  numericTrue = Boolean(numericAnsw == "Yes")
  console.log(numericTrue);
  if (numericTrue == true) {
    charArray = charArray.concat(numericArray);
  }
}
numeric();

function special() {
  var specialAnsw = prompt("Do you want to use special charaters in your password? (Yes or No)")
  specialTrue = Boolean(specialAnsw == "Yes")
  if (specialTrue == true) {
    charArray = charArray.concat(specialArray);
  }
}
special();

if(!uppercaseTrue && !lowercaseTrue && !numericTrue && !specialTrue){
  console.log(uppercaseTrue, lowercaseTrue, numericTrue, specialTrue)
  alert("You have to select at least one group of letters to use. Reload the page to try again. ")
}
else {

}

function addACharacter() {
  var charIndex = Math.floor(Math.random() * (charArray.length))
  console.log(charArray)
  return charArray[charIndex]
}


function generatePassword() {
  var password = "";
  console.log(length)
  for (var i = length; i > 0; i--) {
    password += addACharacter();
  }
  return password
}
alert("Your password is ready. Click Generate Password")
generateBtn.addEventListener("click", writePassword);