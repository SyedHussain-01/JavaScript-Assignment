// QUESTION#1

var inputChar = prompt("Enter any character")
if((inputChar >= "A") && (inputChar <= "Z") ){
    alert("UpperCase Character")
}
else if((inputChar >= "a") && (inputChar <= "z") ){
    alert("LowerCase Character")
}
else{
    alert("Digits")
}

// QUESTION#1

// QUESTION#2

var firstNumber = prompt("enter first number")
var secondNumber = prompt("enter second number")
if(firstNumber>secondNumber){
    alert(firstNumber + " is greater")
}
else if(secondNumber>firstNumber){
    alert(secondNumber + " is greater")
}
else{
    alert("Both are equal")
}

// QUESTION#2

// Question#3

var positiveOrNegativeNumber = prompt("Enter Number")
if(positiveOrNegativeNumber>0){
    alert("Positive")
}
else if(positiveOrNegativeNumber<0){
    alert("Negative")
}
else{
    alert("zero")
}

// QUESTION#3

// QUESTION#4

var vowelOrConsonant = prompt("Enter alphabet")
if((vowelOrConsonant=== "a" || vowelOrConsonant=== "e" || vowelOrConsonant=== "i" ||vowelOrConsonant=== "o" || vowelOrConsonant=== "u") 
  || (vowelOrConsonant=== "A" || vowelOrConsonant=== "E" || vowelOrConsonant=== "I" ||vowelOrConsonant=== "O" || vowelOrConsonant=== "U") )
{
alert("True")
}
else{
    alert("False")
}

// QUESTION#4

// QUESTION#5

var correctPass = "password"
var enterPass = prompt("Enter Your Password")
if(enterPass === "password"){
    alert("Correct Password")
}
else if(enterPass === ""){
    alert("Please Enter Your Password")
}
else{
    alert("Incorrect Password")
}

// QUESTION#5

// QUESTION#6

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";
}
alert(greeting)

// QUESTION#6

// QUESTION#7

var enterTime = prompt("Enter Time","0000")
if(enterTime >= 0000 && enterTime < 1200 ){
    alert("Good Morning!")
}
else if(enterTime >= 1200 && enterTime <1700 ){
    alert("Good Afternoon!")
}
else if(enterTime >= 1700 && enterTime <2100 ){
    alert("Good Evening!")
}
else if(enterTime >= 2100 && enterTime <2359){
    alert("Good Night!")
}
else{
    alert("Invalid Time")
}

// QUESTION#7



