var generateBtn = document.querySelector("#generate");
var selectChar
var charArray
var upppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var charIndex

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function passwordLength (){
  var passwordLength = prompt("How many characters do you want your password")
  return passwordLength
}
//passwordLength();
//Enables uppercase letters
function uppercase(){
  var uppercaseAnsw = prompt("Do you want to use uppercase letters in your password? (Yes or No)")
  var uppercaseTrue = Boolean(uppercaseAnsw == "Yes")
  if(uppercaseTrue){
    return charArray = [].concat(upppercaseArray);
    }
}
uppercase();

//function lowercase(){
function lowercase(){
  var lowercaseAnsw = prompt("Do you want to use lowercase letters in your password? (Yes or No)")
  var lowercaseTrue = Boolean(lowercaseAnsw == "Yes")
  if(lowercaseTrue == true){
    return charArray = [].concat(lowercaseArray);
    }
  }
lowercase();
//Enables uppercase letters

function generatePassword () {
  var charIndex = Math.floor(Math.random() * (charArray.length-1 - 0 + 1) + 0)
  var password = charArray[charIndex]
  console.log(charArray)
  return password
}
generateBtn.addEventListener("click", writePassword);
function moreChar() {
  if (length > 0)
  alert ("this could work")
}
moreChar();




//var password = password.push(Math.random)