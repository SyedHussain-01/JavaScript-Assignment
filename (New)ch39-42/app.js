// QUESTION#1

// function power(a,b){

//   var h = Math.pow(a,b)
//   return h

// }
// var x = power(prompt("enter number"),prompt("enter power"))
// alert(x)

// QUESTION#1

// QUESTION#2

// function leapYear(a){
//     if (a%4===0){
//         return "leap year"

//     }
//     else if(a%4!==0){
//        return "not a leap year"
//     } 

// }
// var ly = leapYear(prompt("Enter a year"))
// alert(ly)

// QUESTION#2

// QUESTION#3

// var s;
// var ar;
// function SforArea(a,b,c){
//     s = (a+b+c)/2
//     ar = s*(s+a)*(s+b)*(s+c)
//     function squareRoot(x){return x*(1/2)}
//     var area = squareRoot(ar) 
//     return area;
// }
// alert(SforArea(+prompt("side1"),+prompt("side2"),+prompt("side3")))

// QUESTION#3

// QUESTION#4

//     function mainFunction(a,b,c){
        
//         function avg(){
//             var average = (a+b+c)/3
//             return "Average = " + average ;
//         }        
        
//         function per(){
//             var percent = ((a+b+c)/300)*100 
//             return "Percentage = " + percent ;
//         }        
        
//         alert(avg())
//         alert(per())

//     }

// mainFunction(+prompt("enter marks"),+prompt("enter marks"),+prompt("enter marks"))

// QUESTION#4

// QUESTION#5

// var text = prompt("enter any text")
// function indxof(word){
    
    
//     x = text.search(word)
//     return x;
// }

// alert(indxof(prompt("enter character to find index number")))

// QUESTION#5

// QUESTION#6

// function removeVowels(sentence){
//     return sentence.replace(/[aeiouAEIOU]/g,"")
// }
// alert(removeVowels(prompt("Enter any sentence")))

// QUESTION#6

// QUESTION#7

// function successiveVowels(sentenceGiven){
    
//     var charct = sentenceGiven.toLowerCase().split("");
//     var count = 0

// for(let i=0;i<charct.length-1;i++){
//     var ch = charct[i];
//     var succssesivech = charct[i+1];

// if(successiveVowels_sub(ch) && successiveVowels_sub(succssesivech)){
//     count++
// }
// }
// return count; 
// }

// function successiveVowels_sub(ch){
//     switch (ch) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//             return true                
//         default:
//             break;
//     }
// }

// alert(successiveVowels(prompt("Enter a sentence")))

// QUESTION#7

// QUESTION#8

// function mainFunction(km){
        
//             function meterFunc(){
//                 var meter = km*1000
//                 return "Meter = " + meter ;
//             }        
            
//             function feetFunc(){
//                 var feet = km*3280.84 
//                 return "Feets = " + feet ;
//             }        
            
//             function inchesFunc(){
//                 var inches = km*39370.1 
//                 return "Inches = " + inches ;
//             }

//             function centimeterFunc(){
//                 var cm = km*100000 
//                 return "Centimeter = " + cm ;
//             }


//             alert(meterFunc())
//             alert(feetFunc())
//             alert(inchesFunc())
//             alert(centimeterFunc())
//         }

// mainFunction(prompt("Enter Value in km"))

// QUESTION#8

// QUESTION#9

// function overtTimePay(work){

// if(work>40){
//     var overtime = work-40
//     var amt = overtime*12
//     return amt

// }

// }

// alert(overtTimePay(prompt("Enter the number of hours an employ has worked")))

// QUESTION#9

// QUESTION#10

// function countingNotes(amount){
// var rshundred,rsten,rsfifty;
// rshundred = Math.floor(amount/100)
// var rs500 = amount-(rshundred*100)
// if (rs500>=50){
//     rsfifty=Math.floor(rs500/50)
// }
// var rs101 = amount - ((rshundred*100)+(rsfifty*50))
// rsten=Math.floor(rs101/10)
// return "Hundred Notes = " + rshundred + "\n" + "Fifty Notes = " + rsfifty + "\n" + "Ten Notes = " + rsten
// }
// alert(countingNotes(prompt("Enter amount required")))

// QUESTION#10