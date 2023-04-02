// Assignment Code
var generateBtn = document.querySelector("#generate");
var numeric = ["1","2","3","4","5","6","7","8","9","0"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","^","_","`","{","|","}","~"];
var password = [];

function passwordLength (){
  var passwordLength = prompt("How many characters do you want your password")
  return passwordLength
}
function passwordUppercase(){
  var uppercaseTrue = prompt("Do you want to use uppercase letters")
  return uppercaseTrue
}
function passwordLowercase (){
  var lowercaseTrue = prompt("Do you want to use uppercase letters")
  return lowercaseTrue
}
function passwordNumeric (){
  var numericTrue = prompt("Do you want to use uppercase letters")
  return numericTrue
}
function passwordUppercase (){
  var specialCharTrue = prompt("Do you want to use uppercase letters")
  return specialCharTrue
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
for (var i = passwordLength; i > 0; i--) {
  while(loop){
    function generatePassword () {
    Math.floor(Math.random() * (max - min + 1) + min)
    var password = password.push(Math.random)
    }
  }
}
generateBtn.addEventListener("click", writePassword);

if (uppercaseTrue && lowercaseTrue && numericTrue && specialCharTrue) {                 //T, T, T, T
  var charArray = [...uppercase, ...lowercase, ...numeric, ...specialChar];
}
  else if (uppercaseTrue && !lowercaseTrue && numericTrue && specialCharTrue) {         //T, F, T, T
    var charArray = [...uppercase, ...numeric, ...specialChar];
  }
  else if (uppercaseTrue && lowercaseTrue && !numericTrue && specialCharTrue) {         //T, T, F, T
    var charArray = [...uppercase, ...lowercase, ...specialChar];
  }
  else if (uppercaseTrue && !lowercaseTrue && !numericTrue && specialCharTrue) {         //T, F, F, T
    var charArray = [...uppercase, ...specialChar];
  }
  else if (uppercaseTrue && lowercaseTrue && numericTrue && !specialCharTrue) {          //T, T, T, F
    var charArray = [...uppercase, ...lowercase, ...numeric];
  }
  else if (uppercaseTrue && !lowercaseTrue && numericTrue && !specialCharTrue) {         //T, F, T, F
    var charArray = [...uppercase, ...numeric];
  }
  else if (uppercaseTrue && lowercaseTrue && !numericTrue && !specialCharTrue) {         //T, T, F, F
    var charArray = [...uppercase, ...lowercase];
  }
  else if (uppercaseTrue && !lowercaseTrue && !numericTrue && !specialCharTrue) {         //T, F, F, F
    var charArray = [...uppercase, ...specialChar];
  }
  else if (!uppercaseTrue && lowercaseTrue && numericTrue && specialCharTrue) {         //F, T, T, T
    var charArray = [...lowercase, ...numeric, ...specialChar];
  }
  else if (!uppercaseTrue && !lowercaseTrue && numericTrue && specialCharTrue) {         //F, F, T, T
    var charArray = [...numeric, ...specialChar];
  }
  else if (!uppercaseTrue && lowercaseTrue && !numericTrue && specialCharTrue) {         //F, T, F, T
    var charArray = [...lowercase, ...specialChar];
  }
  else if (!uppercaseTrue && !lowercaseTrue && !numericTrue && specialCharTrue) {         //F, F, F, T
    var charArray = [...specialChar];
  }
  else if (!uppercaseTrue && lowercaseTrue && numericTrue && !specialCharTrue) {         //F, T, T, F
    var charArray = [...lowercase, ...numeric];
  }
  else if (!uppercaseTrue && !lowercaseTrue && numericTrue && !specialCharTrue) {         //F, F, T, F
    var charArray = [...numeric];
  }
  else if (!uppercaseTrue && lowercaseTrue && !numericTrue && !specialCharTrue) {         //F, T, F, F
    var charArray = [...lowercase];
  }
  else (!uppercaseTrue && !lowercaseTrue && !numericTrue && !specialCharTrue) {         //F, F, F, F
    return console.log("You did not select any characters");
  }
/*
if (uppercaseTrue){
  var passwordChar = [...uppercase];
  if (lowercaseTrue){
    var passwordChar = [...uppercase, ...lowercase];
    if (numericTrue){
      var passwordChar = [...uppercase, ...lowercase, ...numeric];
      if (specialCharTrue){
        var passwordChar = [...uppercase, ...lowercase, ...numeric, ...specialChar];
      }
    }
  }
}
else if (lowercaseTrue){
  var passwordChar = [...lowercase];
  if (numericTrue){
    var passwordChar = [...lowercase, ...numeric];
    if (specialCharTrue){
      var passwordChar = [...lowercase, ...numeric, ...specialChar];
    }
  }
}
else if (numericTrue){
  var passwordChar = [...numeric];
  if (specialCharTrue){
    var passwordChar = [...numeric, ...specialChar];
  }
}
else if (specialCharTrue){
  var passwordChar = [...specialChar];
}
*/


/*
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword () {
  Math.floor(Math.random() * (max - min + 1) + min)
}


// random number generater //
Math.floor(Math.random() * (max - min + 1) + min)


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//define variables
//
//prompt user for which characters to use
//if logic to determine what characters to use.
//select characters to use
*/
