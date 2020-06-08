// QUESTION#1
var literalNotationArray = []
// QUESTION#1

// QUESTION#2
var objectNotationArray = new Array()
// QUESTION#2

// QUESTION#3
var stringsArray = ["lion","elephant","zebra"]
// QUESTION#3

// QUESTION#4
var numbersArray = [0,1,2,3,4,5,6,7,8,9]
// QUESTION#4

// QUESTION#5
var booleanArray = [true,false]
// QUESTION#5

// QUESTION#6
var mixedArray = [true,"monkey","what is",5]
// QUESTION#6

// QUESTION#7
var qualificationsInPak = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.write("QUALIFICATIONS:-" + "<br>" + "<br>" + qualificationsInPak[0] + "<br>" + qualificationsInPak[1] + "<br>" + qualificationsInPak[2] + "<br>"
+ qualificationsInPak[3] + "<br>" + qualificationsInPak[4] + "<br>" + qualificationsInPak[5] + "<br>" 
+ qualificationsInPak[6] + "<br>" + qualificationsInPak[7] + "<br>")
// QUESTION#7

// QUESTION#8
var studentsName = ["Michael","John","Tony"]
var studentsMarks = [320,230,480]
var totalMarks = 500
document.write("Score of " + studentsName[0] + " is " + studentsMarks[0] + ". Percentage :" + (studentsMarks[0]/totalMarks)*100 + "%"  + "<br>" )
document.write("Score of " + studentsName[1] + " is " + studentsMarks[1] + ". Percentage :" + (studentsMarks[1]/totalMarks)*100 + "%" + "<br>" )
document.write("Score of " + studentsName[2] + " is " + studentsMarks[2] + ". Percentage :" + (studentsMarks[2]/totalMarks)*100 + "%" + "<br>" )
// QUESTION#8

// QUESTION#9
var colorNames = ["Green","White"]
document.write(colorNames[0] + "<br>" + colorNames[1])
document.write("<br>")
document.write("<br>") 
var addcolor1 = prompt("Which color you want to add?")
colorNames.unshift(addcolor1)
document.write(colorNames[0] + "<br>" + colorNames[1] + "<br>" + colorNames[2] )
document.write("<br>")
document.write("<br>") 
var addcolor1 = prompt("Which color you want to add?")
colorNames.push(addcolor1)
document.write(colorNames[0] + "<br>" + colorNames[1] + "<br>" + colorNames[2] + "<br>" + colorNames[3]  )
document.write("<br>")
document.write("<br>") 
colorNames.unshift("Brown","Purple")
document.write(colorNames[0] + "<br>" + colorNames[1] + "<br>" + colorNames[2] + "<br>" + colorNames[3] + "<br>" + colorNames[4]
+ "<br>" + colorNames[5]  )
document.write("<br>")
document.write("<br>") 
colorNames.shift()
document.write(colorNames[0] + "<br>" + colorNames[1] + "<br>" + colorNames[2] + "<br>" + colorNames[3] + "<br>" + colorNames[4]  )
document.write("<br>")
document.write("<br>") 
colorNames.pop()
document.write(colorNames[0] + "<br>" + colorNames[1] + "<br>" + colorNames[2] + "<br>" + colorNames[3]   )
document.write("<br>")
document.write("<br>") 
var addcolor1 = prompt("Which color you want to add?")
var addindex = prompt("At which index position you want to add the color?")
colorNames.splice(addindex,0,addcolor1)
document.write(colorNames[0] + "<br>" + colorNames[1] + "<br>" + colorNames[2] + "<br>" + colorNames[3] + "<br>" + colorNames[4]  )
document.write("<br>")
document.write("<br>") 
var removecolor1 = prompt("How many colors you want to delete?")
var addindex = prompt("At which index position you want to add the color?")
colorNames.splice(addindex,removecolor1)
document.write(colorNames[0] + "<br>" + colorNames[1] + "<br>" + colorNames[2] + "<br>" + colorNames[3] + "<br>" + colorNames[4]  )
// QUESTION#9

// QUESTION#10
var sortStudentScores = [320,230,480,120]
document.write(sortStudentScores)
document.write("<br>")
sortStudentScores.sort()
document.write(sortStudentScores)
// QUESTION#10

// QUESTION#11
var cityNames = ["Karachi","Lahore","Quetta","Islamabad","Peshawar"]
document.write("Cities List : " + cityNames)
document.write("<br>")
var selectedCityNames = cityNames.slice(2,4)
document.write("Selected Cities List : " + selectedCityNames)
// QUESTION#11

// QUESTION#12
var arr =  ["This","is","my","cat"]
document.write(arr)
document.write("<br>")
var joinArr = arr.join(" ")
document.write(joinArr)
// QUESTION#12

// QUESTION#13
var devices = ["keyboard","mouse","printer","monitor"]
document.write("Devices :" + "<br>" + devices)
document.write("<br>")
document.write("<br>")
document.write("Out :")
document.write("<br>")
document.write(devices[0])
document.write("<br>")
document.write("Out :")
document.write("<br>")
document.write(devices[1])
document.write("<br>")
document.write("Out :")
document.write("<br>")
document.write(devices[2])
document.write("<br>")
document.write("Out :")
document.write("<br>")
document.write(devices[3])
document.write("<br>")
document.write("<br>")
// QUESTION#13

// QUESTION#14
var devices = ["keyboard","mouse","printer","monitor"]
document.write("Devices :" + "<br>" + devices)
document.write("<br>")
document.write("<br>")
document.write("Out :")
document.write("<br>")
document.write(devices[3])
document.write("<br>")
document.write("Out :")
document.write("<br>")
document.write(devices[2])
document.write("<br>")
document.write("Out :")
document.write("<br>")
document.write(devices[1])
document.write("<br>")
document.write("Out :")
document.write("<br>")
document.write(devices[0])
// QUESTION#14

// QUESTION#15
document.write("Select :")
document.write("<br>")
document.write("<br>")
var mobiles = ["Apple","Samsung","Motorolla","Nokia","Sony","Haier"]
document.write(mobiles[0])
document.write("<br>")
document.write(mobiles[1])
document.write("<br>")
document.write(mobiles[2])
document.write("<br>")
document.write(mobiles[3])
document.write("<br>")
document.write(mobiles[4])
document.write("<br>")
document.write(mobiles[5])
document.write("<br>")
// QUESTION#15











