// QUESTION#1

// function dateAndTime() {
//     var todayDate = new Date(); 
//     alert(todayDate);
// }

// dateAndTime();

// QUESTION#1

// QUESTION#2

// function greet(){
//     var firstName = prompt("Enter Your First Name");
//     var secondName = prompt("Enter Your Second Name");
//     alert("Hi! " + firstName + " " + secondName);
// }
// greet();

// QUESTION#2

// QUESTION#3

// function addition(a,b) {
//     alert((+a)+(+b));
// }
// addition(prompt("Enter First Number"),prompt("Enter Second Number"));


// QUESTION#3

// QUESTION#4

// function calculator(x=prompt("Enter First Number"),opr=prompt("Enter Operator"),z=prompt("Enter Second Number")){
//     if(opr === "+"){
//         return alert ( (+x)+(+z) )
//     }
//     else if(opr === "-"){
//         return alert(x-z)
//     }
//     else if(opr === "*"){
//         return alert(x*z)
//     }
//     else if(opr === "/"){
//         return alert(x/z)
//     }
//     else{return alert("invalid operator!")}

// }
// calculator();

// QUESTION#4

// QUESTION#5

// function square(a){
//     return a*a
// }
// alert(square(prompt("Enter any Number to Square")))

// QUESTION#5

// QUESTION#6

// function factorial(num){
//     if(num === 0 || num === 1){
//     return 1;
//     }
//     else{
//         for(var i = num-1; i >= 1; i--){
//     num = num * i;}
//     return num;
//     }
// }   
//     alert(factorial(prompt("Enter Number")));

// QUESTION#6

// QUESTION#7

// function counting(){
//     var startNumber = prompt("Enter start number");
//     var endNumber =prompt("Enter end number");
//    for(i=startNumber; i<=endNumber ;i++){
//        document.write(i + "<br>")


//    } 
// }
// counting();

// QUESTION#7

// QUESTION#8

// function calculateHypontaneous(base,perp){
// var hyp = base + perp
// function square(sqr){return sqr*sqr}
// hyp = Math.sqrt(square(base)+square(perp))
// alert(hyp)
// }
// var hypontaneous = calculateHypontaneous(prompt("Enter Base"),prompt("Enter Perpendicular"))


// QUESTION#8

// QUESTION#9

// function areaOfTriangle(width,height){
//     var area = width * height 
//     alert(area)
// }
// var a = areaOfTriangle(prompt("Enter Width"),prompt("Enter Height"))

// QUESTION#9

// QUESTION#10

// function pallindrome(p){
//     var check = ""
// for(i = p.length-1 ; i >= 0 ; i-- ){
// check += p[i]
// }
// if(p === check){
//     alert("Pallindrome")
// }
// }
// pallindrome(prompt("Enter any word"));

// QUESTION#10

// QUESTION#11

// function convertTitleCase(string){

// var splitString = string.split(" ");
// var titleCase = [];
// for(var i = 0 ; i < splitString.length ; i++){     
// titleCase.push((splitString[i])[0].toUpperCase() + splitString[i].slice(1));
//   }
// return titleCase.join(" ");


// }
// alert(convertTitleCase(prompt("Enter a String")))

// QUESTION#11

// QUESTION#12

// function longestWord(string)
// {
// var splitString = string.split(" ")
// var length1 = splitString[0].length
// var length2 = splitString[1].length
// var length3 = splitString[2].length
// var box = [length1,length2,length3]
// var maxim = Math.max(...box)
// if(splitString[0].length === maxim){
//     alert(splitString[0])
// }
// else if(splitString[1].length === maxim){
//     alert(splitString[1])
// }
// else if(splitString[2].length === maxim){
//     alert(splitString[2])
// }


// }

// longestWord("Web Development Course");

// QUESTION#12

// QUESTION#13

// function wordLength(letter,word){
// var result = 0;
// for(var i=0 ; i<word.length ; i++){
//     if(word.charAt(i) === letter){
//         result += 1 ;
       
//         }
// }

// return result;

// }
// alert(wordLength(prompt("Enter letter"),prompt("Enter word")));

// QUESTION#13

// QUESTION#14












// QUESTION#14