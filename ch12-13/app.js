// QUESTION#1
// var inputChar = prompt("Enter any character")
// var A = 65
// var B = 66
// var C = 67
// var D = 68
// var E = 69
// var F = 70
// var G = 71
// var H = 72
// var I = 73
// var J = 74
// var K = 75
// var L = 76
// var M = 77
// var N = 78
// var O = 89
// var P = 80
// var Q = 81
// var R = 82
// var S = 83
// var T = 84
// var U = 85
// var V = 86
// var W = 87
// var X = 88
// var Y = 89
// var Z = 90
// var a = 97
// var b = 98
// var c = 99
// var d = 100
// var e = 101
// var f = 102
// var g = 103
// var h = 104
// var i = 105
// var j = 106
// var k = 107
// var l = 108
// var m = 109
// var n = 110
// var o = 111
// var p = 112
// var q = 113
// var r = 114
// var s = 115
// var t = 116
// var u = 117
// var v = 118
// var w = 119
// var x = 120
// var y = 121
// var z = 122
// if((inputChar >= "65") && (inputChar <= "90") ){
//     alert("UpperCase Character")
// }
// else if((inputChar >= "97") && (inputChar <= "122") ){
//     alert("LowerCase Character")
// }
// else{
//     alert("Digits")
// }

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



