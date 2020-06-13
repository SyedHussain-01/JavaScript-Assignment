// 1.QUESTION#1
// document.write("RESULT :")
// document.write("<br>")
// // var a = prompt("GivenValue","Value")
// var x = a
// document.write("The Value of a is " + x)
// document.write("<br>")
// document.write("__________________")
// document.write("<br>")
// document.write("<br>")
// var x = ++a
// document.write("The Value of ++a is " + x)
// document.write("<br>")
// var x = a
// document.write("The Value of a is " + x)
// document.write("<br>")
// document.write("<br>")
// var x = a++
// document.write("The Value of a++ is " + x)
// document.write("<br>")
// var x = a
// document.write("The Value of a is " + x)
// document.write("<br>")
// var x = --a
// document.write("<br>")
// document.write("The Value of --a is " + x)
// document.write("<br>")
// var x = a
// document.write("The Value of a is " + x)
// document.write("<br>")
// var x = a--
// document.write("<br>")
// document.write("The Value of a-- is " + x)
// document.write("<br>")
// var x = a
// document.write("The Value of a is " + x)
// document.write("<br>")
// document.write("<br>")
// // 1.QUESTION#1

// // 2.QUESTION#2
// document.write("<br>")
// var y = 2
// document.write("y is : " + y)
// document.write("<br>")
// var z = 1
// document.write("z is : " +z)
// document.write("<br>")
// document.write("Result : --y - --z + ++z + z--" )
// document.write("<br>")
// var c = --y - --z + ++z + z--
// // --y=1
// // --z=0
// // ++z=1
// // z--=1
// // 1 - 0 + 1 + 1 = 3
// document.write("Result : " + c) 
// // 2.QUESTION#2

// // 3.QUESTION#3
// document.write("<br>")
// document.write("<br>")
// // var userName = prompt("Your Name?","Enter Your Name")
// document.write("Hey " + userName + "!" + " Welcome to our Webpage!") 
// // 3.QUESTION#3

// // 4.QUESTION#4
// document.write("<br>")
// document.write("<br>")
// // var firstNumber = prompt("Enter Number", 5 )
// var n = 1
// var secondNumber = n
// document.write(firstNumber + "*1 " + " = " + firstNumber*secondNumber)
// document.write("<br>")
// var secondNumber = ++n
// document.write(firstNumber + "*2 " + " = " + firstNumber*secondNumber)
// document.write("<br>")
// var secondNumber = ++n
// document.write(firstNumber + "*3 " + " = " + firstNumber*secondNumber)
// document.write("<br>")
// var secondNumber = ++n
// document.write(firstNumber + "*4 " + " = " + firstNumber*secondNumber)
// document.write("<br>")
// var secondNumber = ++n
// document.write(firstNumber + "*5 " + " = " + firstNumber*secondNumber)
// document.write("<br>")
// var secondNumber = ++n
// document.write(firstNumber + "*6 " + " = " + firstNumber*secondNumber)
// document.write("<br>")
// var secondNumber = ++n
// document.write(firstNumber + "*7 " + " = " + firstNumber*secondNumber)
// document.write("<br>")
// var secondNumber = ++n
// document.write(firstNumber + "*8 " + " = " + firstNumber*secondNumber)
// document.write("<br>")
// var secondNumber = ++n
// document.write(firstNumber + "*9 " + " = " + firstNumber*secondNumber)
// document.write("<br>")
// var secondNumber = ++n
// document.write(firstNumber + "*10 " + " = " + firstNumber*secondNumber)
// 4.QUESTION#4

// 5.QUESTION#5
document.write("<br>")
document.write("<br>")
document.write("<br>")
var sub1 = prompt("Subject?","Maths")
var sub2 = prompt("Subject?","Physics")
var sub3 = prompt("Subject?","Chemistry")
var maxMarksEachSub = 100
var maxTotal = maxMarksEachSub*3
var obtMarkSub1 = prompt("marks1?" )
var obtMarkSub2 = prompt("marks2?" )
var obtMarkSub3 = prompt("marks3?" )
var totalObtMarks = (+obtMarkSub1) + (+obtMarkSub2) + (+obtMarkSub3)
var percentagesub1 = (obtMarkSub1/maxMarksEachSub)*100
var percentagesub2 = (obtMarkSub2/maxMarksEachSub)*100
var percentagesub3 = (obtMarkSub3/maxMarksEachSub)*100
var percentageTotal = (totalObtMarks/maxTotal)*100
document.write("SUBJECT" + "        " + "TOTAL MARKS" + "       " + "OBTAINED MARKS" + "        " + "PERCENTAGE")
document.write("<br>")
document.write("<br>")
document.write(sub1 + "                 " + maxMarksEachSub + "       " + (+obtMarkSub1) + "        " + (+percentagesub1) + "%")
document.write("<br>")
document.write(sub2 + "        " + maxMarksEachSub + "       " + (+obtMarkSub2) + "        " + (+percentagesub2) + "%")
document.write("<br>")
document.write(sub3 + "        " + maxMarksEachSub + "       " + (+obtMarkSub3) + "        " + (+percentagesub3) + "%")
document.write("<br>")
document.write("       " + "        " + maxTotal + "       " + (+totalObtMarks) + "        " + (+percentageTotal) + "%")
// 5.QUESTION#5


