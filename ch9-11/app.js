// QUESTION#1

var city = prompt("Your City?");
if (city === "Karachi"){
    document.write("WELCOME TO THE CITY OF LIGHTS!");
}

// QUESTION#1

// QUESTION#2

var gender = prompt("Your Gender?");
if(gender === "male") {
    document.write("Good Morning Sir!");
}
if(gender === "female"){
    document.write("Good Morning Ma'am!")
}

// QUESTION#2

// QUESTION#3

var signalLight = prompt("Enter Signal Light color","red/yellow Or green")
if(signalLight === "red") {
    document.write("Must Stop!")
}
if(signalLight === "yellow") {
    document.write("Ready To Move!")
}
if(signalLight === "green"){
    document.write("Move Now!")
}


// QUESTION#3

// QUESTION#4

var remainingFuel = prompt("Remaining Fuel?")
if(remainingFuel <= 0.25) {
    document.write("Please refill the fuel in your car")
}

// QUESTION#4

// QUESION#5

// RECORDINGS ARE PLACED IN HTML FILE


// a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// b

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// c

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// d

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// e

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
     
// f

if("car" < "cat"){
    alert("car is smaller than cat");
    }

// QUESION#5

// QUESTION#6

var marksObtained = prompt("Marks obtained?");
var totalMarks = prompt("Total marks?");
var percentage = (marksObtained/totalMarks)*(100);
document.write("<br>")
document.write("Marks Obtained = " + marksObtained);
document.write("<br>")
document.write("Total Marks = " + totalMarks);
document.write("<br>")
document.write("Percentage = " + percentage);
document.write("<br>")
if(percentage >= 80 ){
    document.write("Grade = " + "A-one")
    document.write("<br>")
    document.write("Remarks = " + "Excellent")
}
if(percentage >= 70 & percentage < 80 ){
    document.write("Grade = " + "A")
    document.write("<br>")
    document.write("Remarks = " + "Good")
}
if(percentage >= 60 & percentage < 70 ){
    document.write("Grade = " + "B")
    document.write("<br>")
    document.write("Remarks = " + "You Need To Improve")
}
if(percentage < 60 ){
    document.write("Grade = " + "Fail")
    document.write("<br>")
    document.write("Remarks = " + "Sorry")
}

// QUESTION#6

// QUESTION#7

var correctNumber = 6;
var userGuess = prompt("Guess a digit from 1-10");
if(+userGuess === correctNumber){
    alert("Bingo!Correct Answer")
}
if(+userGuess === ++correctNumber){
    alert("Close enough to the correct answer")
}

// QUESTION#7

// QUESTION#8

var givenNumber = prompt("Enter Number")
if(givenNumber%3 === 0){
    alert("This number is divisible by 3")
}

// QUESTION#8

// QUESTION#9

var evenOrOddNumber = prompt("Enter Number")
if(evenOrOddNumber%2 === 0){
    alert("It is an even number")
}
if(evenOrOddNumber%2 !== 0){
    alert("It is an odd number")
}

// QUESTION#9

// QUESTION#10

var temp = prompt("Enter Temperature")
if(temp >= 40){
    alert("It is too hot outside")
}
if(temp >= 30 & temp < 40){
    alert("The weather today is normal")
}
if(temp >= 20 & temp < 30){
    alert("Today's weather is cool")
}
if(temp >= 10 & temp < 20){
    alert("OMG! Today’s weather is so Cool")
}
if(temp < 10){
    alert("OMG! Today’s weather is super Cool")
}

// QUESTION#10

// QUESTION#11

var calFirstNumber = prompt("Enter First Number")
var operator = prompt("+ , - , / , * , %")
var calSecondNumber = prompt("Enter Second Number")
if (operator === "+" ){
    alert(calFirstNumber+calSecondNumber)
}
if (operator === "-" ){
    alert(calFirstNumber-calSecondNumber)
}
if (operator === "/" ){
    alert(calFirstNumber/calSecondNumber)
}
if (operator === "*" ){
    alert(calFirstNumber*calSecondNumber)
}
if (operator === "%" ){
    alert(calFirstNumber%calSecondNumber)
}

// QUESTION#11