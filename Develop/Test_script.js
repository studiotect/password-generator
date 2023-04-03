var generateBtn = document.querySelector("#generate");
var selectChar
var charArray = []
var upppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numericArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialArray = [" ","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","^","_","`","{","|","}","~"];
var length = 0
var charIndex
var passwordArray = []

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function passwordLength (){
  var passwordLength = prompt("How many characters do you want your password")
  length = passwordLength
}
passwordLength();
//Enables uppercase letters
function uppercase(){
  var uppercaseAnsw = prompt("Do you want to use uppercase letters in your password? (Yes or No)")
  var uppercaseTrue = Boolean(uppercaseAnsw == "Yes")
  if(uppercaseTrue){
    charArray = charArray.concat(upppercaseArray);
    }
}
uppercase();

//function lowercase(){
function lowercase(){
  var lowercaseAnsw = prompt("Do you want to use lowercase letters in your password? (Yes or No)")
  var lowercaseTrue = Boolean(lowercaseAnsw == "Yes")
  if(lowercaseTrue == true){
    charArray = charArray.concat(lowercaseArray);
    }
  }
lowercase();

function numeric(){
  var numericAnsw = prompt("Do you want to use numbers in your password? (Yes or No)")
  var numericTrue = Boolean(numericAnsw == "Yes")
  if(numericTrue == true){
    charArray = charArray.concat(numericArray);
    }
  }
numeric();

function special(){
  var specialAnsw = prompt("Do you want to use special charaters in your password? (Yes or No)")
  var specialTrue = Boolean(specialAnsw == "Yes")
  if(specialTrue == true){
    charArray = charArray.concat(specialArray);
    }
  }
special();


function generatePassword () {
  var charIndex = Math.floor(Math.random() * (charArray.length-1 - 0 + 1) + 0)
  passwordArray = passwordArray.push(charArray[charIndex])
  console.log(charArray)
  moreChar();
  password = passwordArray.join('');
  return password
}

generateBtn.addEventListener("click", writePassword);

function moreChar() {
  for (var i = passwordLength; i > 0; i--) {
      generatePassword();
    }
  }


//  Math.floor(Math.random() * (max - min + 1) + min)
//      var password = password.push(Math.random)
//      }
//    }
//  }


//var password = password.push(Math.random)