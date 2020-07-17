// QUESTION#1

// var currentDate = new Date()
// alert(currentDate)

// QUESTION#1

// QUESTION#2

// var month =["january","february","march","april","may","june","july","august","september","october","november","december"]
// var currentDate2 = new Date()
// var currentMonth = currentDate2.getMonth()
// alert("Current Month : " + month[currentMonth])

// QUESTION#2

// QUESTION#3

// var currentDate3 = new Date()
// var stringCD = currentDate3.toString()
// var currentDay = stringCD.slice(0,3) 
// alert("Today is " + currentDay)

// QUESTION#3

// QUESTION#4

// var currentDate3 = new Date()
// var stringCD = currentDate3.toString()
// var currentDay = stringCD.slice(0,3) 
// if(currentDay === "Sat" || currentDay === "Sun" ){
//     alert("It's Fun Day")
// }

// QUESTION#4

// QUESTION#5

// var date = new Date()
// var stringCD2 = date.toString()
// var checkDate = stringCD2.slice(8,10)
// var stringCheckDate = parseInt(checkDate)
// if(stringCheckDate <= 16){
//     alert("First fifteen days of the month")
// }
// else if(stringCheckDate>=17 && stringCheckDate<=31){
//     alert("Last days of the month")
// }

// QUESTION#5

// QUESTION#6

// var currentDate4 = new Date()
// var milliSecond = currentDate4.getTime()
// var minute = (milliSecond/1000)/60
// document.write("Current Date: " + currentDate4 + "<br>" + "Elapsed Milliseconds since January 1,1970: " + milliSecond
// + "<br>" + "Elapsed Milliseconds since January 1,1970: " + minute)


// QUESTION#6

// QUESTION#7

// var currentDate5 = new Date()
// alert(currentDate5)
// var stringCD5 = currentDate5.toString() 
// var sliceCD5 = stringCD5.slice(16,18)
// var parseCD5 = parseInt(sliceCD5)
// if(parseCD5>=0 && parseCD5<=11){
//     alert("It's AM")
// }   
// else if(parseCD5>=12 && parseCD5<=23){
//     alert("It's PM")
// }

// QUESTION#7

// QUESTION#8

// var laterDate = new Date("Dec 31,2020")
// alert("Later Date : " + laterDate)

// QUESTION#8

// QUESTION#9

// var todayDate = new Date()
// var daysTD = todayDate.getTime()
// var requireDate = new Date("June 18,2015")
// var requireTD = requireDate.getTime()
// var milliScecond = daysTD - requireTD
// var days = milliScecond / (1000 * 60 * 60 * 24)
// var roundDays = Math.round(days)
// alert(roundDays + " days have passed since 1st Ramadan,2015 ")


// QUESTION#9

// QUESTION#10

// var beginningDate = new Date("Jan 1,2015")
// var msBD = beginningDate.getTime()
// var refDate = new Date("Dec 5,2015 22:50:16")
// var msRD = refDate.getTime()
// var mS = msRD - msBD 
// var seconds = mS / (1000*60)
// var roundSec = Math.ceil(seconds)   
// alert("Our reference date : " + refDate + "\n" + roundSec + " seconds had passed since the beginning of 2015 ")

// QUESTION#10

// QUESTION#11

// var currentDate = new Date()
// document.write("Current Date : " + currentDate + "<br>")
// var modTime = currentDate.setHours(-1)
// document.write("1 hour ago,it was " + currentDate)

// QUESTION#11

// QUESTION#12

// var currentYear = new Date()
// var modTime = currentYear.setMonth(-1195)
// alert("100 years ago,it was " + currentYear)

// QUESTION#12

// QUESTION#13

// var age = prompt("Enter Your Age")
// document.write("Your Age is : " + age + "<br>")
// var todayYear = new Date ()
// var stringTY = todayYear.toString()
// var sliceTY = stringTY.slice(11,15)
// var parseTY = parseInt(sliceTY) 
// var yearofbirth = parseTY - age
// document.write("Your Birth Year is : " + yearofbirth)

// QUESTION#13

// QUESTION#14

// var customerName = prompt("Enter Customer Name")
// var noOfUnits = prompt("Enter No of Units","400.00")
// var chargesPerUnit = 16.00
// var netAmtPayWD = noOfUnits*chargesPerUnit
// var netAmtPayWDRound = netAmtPayWD.toFixed(2)
// var latePaySC = 350.00
// var grossAmtPayAD = netAmtPayWD + latePaySC
// var grossAmtPayADRound = grossAmtPayAD.toFixed(2)
// var billDate = new Date()
// var stringBillD = billDate.toString()
// var sliceMonth = stringBillD.slice(4,7) 
// document.write("Customer Name : " + customerName + "<br>" + "Month : " + sliceMonth + "<br>"
// + "Number of Units : " + noOfUnits + "<br>" + "Charges per Unit : " +  chargesPerUnit + "<br>"
// + "Net Amount Payable (within Due Date) : " + netAmtPayWDRound + "<br>" + "Late Payment Surcharge : " +  latePaySC + "<br>"
// + "Gross Amount Payable (after Due Date) : " + grossAmtPayADRound)

// QUESTION#14



